/**
 * Module contains `ProfileLock` component.
 * @module src/entities/ProfileLock/ProfileLock
 */
import { Dialog } from '@kobalte/core';

import type { TProfile } from '#/api/basic-api';
import { Button, KeyMap } from '@/shared';

import { PIN_LENGTH } from './constants';
import { useProfileState, withProfileStore } from './model';
import { styles } from './ProfileLock.css';
import { PinField } from './ui/PinField';

export type ProfileLockProps = Pick<Dialog.DialogRootProps, 'onOpenChange'> & {
    onSuccess: () => Promise<void>;
    profile: Nullable<TProfile>;
    setProfile: (profile: Nullable<TProfile>) => void;
};

const MESSAGES = {
    errorTitle: 'Whoops, wrong PIN. Please try again.',
    status: 'Profile Lock is currently on.',
    title: 'Enter your PIN to access this profile.',
};

/**
 * `ProfileLockModal` component.
 * @constructor
 * @name src/features/Profiles/ProfileLock/ProfileLock
 * @method
 * @param {ProfileLockProps} props - component props.
 * @return {JSXElement} React component with children.
 */
export const ProfileLock = withProfileStore((props: ProfileLockProps) => {
    const { state, actions } = useProfileState();

    const [fieldRefs, setFieldsRefs] = createSignal<HTMLInputElement[]>([]);

    /**
     * `ProfileLockModal` component
     * @param {number} pinNumberIndex - pin number index.
     * @param {string} value - pin number value.
     */
    const handlePinNumberChange = async (pinNumberIndex: number, value: string) => {
        actions.setPinNumber(pinNumberIndex, value);
        actions.setPinError(false);

        if (state.pin.join('').length === PIN_LENGTH) {
            if (await actions.onSubmit()) {
                await props.onSuccess();
            }
        }

        if (pinNumberIndex <= PIN_LENGTH - 1) {
            fieldRefs()?.[pinNumberIndex + 1]?.focus();
        }
    };

    /**
     * Keydown handler creator.
     * @param {Accessor<number>} pinNumberIndex - pin reactive getter.
     * @return {Function} keydown event handler.
     */
    const handleKeyDown = (pinNumberIndex: Accessor<number>) => (eventData) => {
        switch (eventData.key) {
            case KeyMap.Backspace: {
                eventData.preventDefault();

                const prevFieldRef = fieldRefs()?.[pinNumberIndex() - 1];

                actions.setPinNumber(pinNumberIndex(), '');

                if (pinNumberIndex() > 0 && prevFieldRef) {
                    prevFieldRef.focus();
                    prevFieldRef.select();
                }

                break;
            }
            default: {
                break;
            }
        }
    };

    createEffect(() => {
        actions.setLock(props.profile?.lock || '');
    });

    return (
        <Dialog.Root isOpen={!! props.profile} isModal>
            <Dialog.Portal>
                <Dialog.Content class={styles.modalPaper}>
                    <div class={styles.modalContent}>
                        <Button
                            class={styles.modalClose}
                            icon={{
                                'class': styles.modalCloseIconBox,
                                iconsClass: styles.modalCloseIcon,
                                name: 'cross',
                            }}
                            onClick={() => props.setProfile(null)}
                        />
                        <p class={styles.modalStatus}>
                            {MESSAGES.status}
                        </p>
                        <h3
                            class={styles.modalTitle({
                                error: state.isPinError
                            })}
                        >
                            {MESSAGES[state.isPinError
                                ? 'errorTitle'
                                : 'title']}
                        </h3>
                        <div class={styles.pinPad}>
                            <div
                                class={styles.pinPadContainer({
                                    error: state.isPinError
                                })}
                            >
                                <For each={state.pin}>
                                    {(pinNumber, pinNumberIndex) => (
                                        <PinField
                                            fieldRefs={fieldRefs}
                                            setFieldsRefs={setFieldsRefs}
                                            pinNumber={pinNumber}
                                            pinNumberIndex={pinNumberIndex()}
                                            onKeyDown={handleKeyDown(pinNumberIndex)}
                                            onPinNumberChange={handlePinNumberChange}
                                            onSetPinValidation={actions.setPinValidation}
                                        />
                                    )}
                                </For>
                            </div>
                        </div>
                        <p class={styles.modalValidation}>
                            {state.pinValidation}
                        </p>
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
});

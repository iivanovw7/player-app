/**
 * Module contains `WaitScreen` modal component.
 * @module src/shared/ui/components/WaitScreen/WaitScreen
 */
import { isNumber } from 'ramda-adjunct';

import type { TProfile } from '#/api/basic-api';

import { Img, Overlay, Spinner } from '../../elements';

import { withAvatarPlaceholder } from './lib';
import { styles } from './WaitScreen.css';

export type WaitScreenProps = {
    profile?: Nullable<TProfile>;
};

/**
 * Wait screen component.
 * @method
 * @name src/shared/ui/components/WaitScreen/WaitScreen
 * @constructor
 * @param {WaitScreenProps} props - component properties.
 * @returns component with children.
 */
export const WaitScreen = (props: WaitScreenProps) => (
    <Overlay lockScroll class={styles.overlay}>
        <Spinner
            class={styles.spinner}
            containerClass={styles.spinnerContainer}
        >
            {isNumber(props.profile?.index) && (
                <Img
                    alt="avatar"
                    class={styles.avatar}
                    imageClass={styles.avatarImage}
                    size={56}
                    src={withAvatarPlaceholder(props.profile?.avatar)}
                />
            )}
        </Spinner>
    </Overlay>
);

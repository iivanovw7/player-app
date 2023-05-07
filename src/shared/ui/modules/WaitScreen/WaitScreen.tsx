/**
 * Module contains `WaitScreen` modal component.
 * @module src/shared/ui/modules/WaitScreen/WaitScreen
 */
import { isNumber } from 'ramda-adjunct';

import type { TProfile } from '#/api/basic-api';

import { Img, Spinner, Overlay } from '../../components';

import { withAvatarPlaceholder } from './lib';
import { styles } from './WaitScreen.css';

export type WaitScreenProps = {
    profile?: Nullable<TProfile>;
};

/**
 * Wait screen component.
 * @method
 * @name src/shared/ui/modules/WaitScreen/WaitScreen
 * @constructor
 * @param {WaitScreenProps} props - component properties.
 * @return {JSXElement} component with children.
 */
export const WaitScreen = (props: WaitScreenProps) => (
    <Overlay class={styles.overlay} lockScroll>
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

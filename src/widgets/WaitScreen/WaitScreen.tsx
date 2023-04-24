/**
 * Module contains `WaitScreen` modal component.
 * @module src/widgets/WaitScreen/WaitScreen
 */
import type { TProfile } from '#/api/basic-api';
import { isNumber, Img, Spinner, Overlay } from '@/shared';

import { withAvatarPlaceholder } from './lib';
import { styles } from './WaitScreen.css';

export type WaitScreenProps = {
    profile?: Nullable<TProfile>;
};

/**
 * Wait screen component.
 * @method
 * @name src/WaitScreen/ErrorScreen
 * @constructor
 * @param {WaitScreenProps} props - component properties.
 * @return {JSXElement} component with children.
 */
export const WaitScreen = (props: WaitScreenProps) => {
    return (
        <Overlay lockScroll>
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
};

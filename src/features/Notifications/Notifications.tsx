/**
 * Module contains application header notifications.
 * @module widgets/Header/Notifications/Notifications
 */
import { Button } from '@/shared';

import { styles } from './Notifications.css';

/**
 * Header Notifications component.
 * @method
 * @return {JSXElement} React component with children.
 * @constructor
 */
export const Notifications = () => {
    return (
        <Button
            class={styles.toggle}
            icon={{
                'class': styles.toggleIconBox,
                iconsClass: styles.toggleIcon,
                name: 'bell',
                size: 24,
            }}
        />
    );
};

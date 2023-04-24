/**
 * Module contains `ErrorScreen` component.
 * @module src/widgets/ErrorScreen/ErrorScreen
 */
import { useNavigate } from '@solidjs/router';

import { getErrorCodeString, type ErrorData } from '@/shared';
import { Button } from '@/shared/ui/components';
import { routePath } from '@/shared/ui/routes';

import { styles } from './ErrorScreen.css';

export type ErrorScreenProps = {
    class?: string;
    error?: ErrorData | number,
    onClick?: () => void;
    subtitle?: string;
    title?: string;
};

const MESSAGES = {
    button: 'Netflix Home',
    code: 'Error Code '
};

/**
 * Error screen component.
 * @method
 * @name src/widgets/ErrorScreen
 * @param {ErrorScreenProps} props - represents component properties.
 * @constructor
 * @return {JSXElement} React component with children.
 */
export const ErrorScreen = (props: ErrorScreenProps) => {
    const navigate = useNavigate();

    /**
     *  Redirect handler
     */
    const handleHomeClick = () => {
        if (props.onClick) {
            props.onClick?.();
        }
        else {
            navigate(routePath.home);
        }
    };

    return (
        <div class={props.class}>
            <h1 class={styles.title}>
                {props.title}
            </h1>
            <div class={styles.body}>
                <p class={styles.message}>
                    {props.subtitle}
                </p>
                <Button
                    class={styles.button}
                    text={MESSAGES.button}
                    textClass={styles.buttonText}
                    onClick={handleHomeClick}
                />
            </div>
            <div class={styles.footer}>
                <span class={styles.code}>
                    {MESSAGES.code}
                    <strong class={styles.strong}>
                        {getErrorCodeString(props.error)}
                    </strong>
                </span>
            </div>
        </div>
    );
};

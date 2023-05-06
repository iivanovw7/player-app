/**
 * Module contains `ErrorFallback` page.
 * @module src/pages/ErrorFallback/ErrorFallback
 */
import { ErrorScreen, type ErrorData } from '@/shared';
import { Header } from '@/widgets';

import { styles } from './ErrorFallback.css';

const MESSAGES = {
    subtitle: 'Sorry, we`re having trouble with your request.',
    title: 'Sorry for interruption'
};

export type ErrorFallbackProps = {
    error?: ErrorData | number;
};

/**
 * ErrorFallback page.
 * @method
 * @constructor
 * @param {ErrorFallbackProps} props - contains component props.
 * @return {JSXElement} component with children.
 */
export const ErrorFallback = (props: ErrorFallbackProps) => (
    <div class={styles.page}>
        <Header />
        <ErrorScreen
            class={styles.content}
            error={props.error}
            subtitle={MESSAGES.subtitle}
            title={MESSAGES.title}
            onClick={() => location.reload()}
        />
    </div>
);

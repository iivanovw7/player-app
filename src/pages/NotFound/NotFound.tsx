/**
 * Module contains `not found` page.
 * @module src/pages/NotFound/NotFound
 */
import { ErrorCodeMap, ErrorScreen } from '@/shared';
import { Header } from '@/widgets';

import { styles } from './NotFound.css';

const { NOT_FOUND } = ErrorCodeMap;

const MESSAGES = {
    subtitle: 'Sorry, we can`t find that page. You`ll find lots to explore on the home page.',
    title: 'Lost your way?',
};

/**
 * `404` page.
 * @method
 * @constructor
 * @return {JSXElement} React component with children.
 */
export const NotFound = () => (
    <div class={styles.page}>
        <Header/>
        <ErrorScreen
            class={styles.content}
            error={NOT_FOUND}
            subtitle={MESSAGES.subtitle}
            title={MESSAGES.title}
        />
    </div>
);

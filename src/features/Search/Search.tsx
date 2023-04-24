/**
 * Module contains application header search bar.
 * @module src/widgets/Search/Search
 */
import { useBreakpoints, Button } from '@/shared';

import { styles } from './Search.css';

/**
 * Header Search component.
 * @method
 * @return {JSXElement} React component with children.
 * @constructor
 */
export const Search = () => {
    const { xsUp } = useBreakpoints();

    return (
        <Switch>
            <Match when={xsUp()}>
                <Button
                    class={styles.toggle}
                    icon={{
                        'class': styles.toggleIconBox,
                        iconsClass: styles.toggleIcon,
                        name: 'search',
                        size: 24,
                    }}
                />
            </Match>
        </Switch>
    );
};

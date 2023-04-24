/**
 * Module contains `Browse` page.
 * @module src/pages/Browse/Browse
 */
import { Header, withProfileCheck } from '@/widgets';

/**
 * `Browse` page.
 * @method
 * @constructor
 * @return {JSXElement} component with children.
 */
export const Browse = withProfileCheck(() => {
    return (
        <div>
            <Header withMenu withNavigation />
        </div>
    );
});

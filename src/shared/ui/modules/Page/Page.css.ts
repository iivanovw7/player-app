/**
 * Module contains styles for `Page` page.
 * @module src/shared/ui/modules/Page
 */
import { style } from '@vanilla-extract/css';

import { commonStyles, vars } from '../../styles';

const page = style([
    commonStyles.fullScreenBox,
    {
        zIndex: vars.zIndex.overlay,
    }
]);

export const styles = {
    page
};

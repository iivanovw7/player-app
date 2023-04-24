/**
 * Module contains icon styles elements.
 * @module src/shared/style/components/Icon/Icon.css
 */
import { style } from '@vanilla-extract/css';

import { mixins } from '../../mixins';

const icon = style({
    display: 'inline-block',
    position: 'relative',
    selectors: {
        'svg &': mixins.centerAbsolute()
    }
});

export const styles = {
    icon
};

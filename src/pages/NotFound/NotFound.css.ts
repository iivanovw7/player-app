/**
 * Module contains styles for `404` page.
 * @module src/pages/NotFound/NotFound.css
 */
import { style } from '@vanilla-extract/css';

import { commonStyles, theme, vars } from '@/shared/ui/styles';

const page = style([
    commonStyles.fullScreenBox,
    {
        zIndex: vars.zIndex.overlay,
    }
]);

const content = style([
    commonStyles.fullScreenBoxContent,
    {
        '::after': {
            backgroundAttachment: 'fixed',
            backgroundImage: 'url("../../../assets/img/bg-lost-in-space.png")',
            backgroundPosition: '50%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        },
        '::before': {
            background: theme.background.backdropShadow,
        },
        display: 'flex',
        flex: '2 0',
        flexDirection: 'column',
        margin: '0 1em',
        position: 'relative',
        textAlign: 'center',
        userSelect: 'none',
    }
]);

export const styles = {
    content,
    page
};

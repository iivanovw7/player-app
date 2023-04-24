/**
 * Module ErrorFallback classes.
 * @module ~/pages/ErrorFallback.css.ts
 */

import { style } from '@vanilla-extract/css';

import { commonStyles, mixins, theme, vars } from '@/shared/ui/styles';

const page = style([
    commonStyles.fullScreenBox,
    {
        '@media': {
            ...mixins.media(['lg-up'], {
                paddingTop: vars.height.headerDesktop
            })
        },
        zIndex: vars.zIndex.overlay,
    },

]);

const content = style([
    commonStyles.fullScreenBoxContent,
    {
        '::after': {
            backgroundAttachment: 'fixed',
            backgroundImage: 'url("../../../assets/img/bg-mindhunter-v2.png")',
            backgroundPosition: '50%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',

        },
        '::before': {
            background: theme.background.backdropShadow,
        },
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
    }
]);

export const styles = {
    content,
    page,
};

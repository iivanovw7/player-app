/**
 * Module login menu styles.
 * @module src/features/Login/Login.css.ts
 */
import { style } from '@vanilla-extract/css';
import { em, margin, padding, position } from 'polished';

import { imgStyles, mixins, theme, vars } from '@/shared/ui/styles';

const loginPage = style([
    {
        backgroundColor: vars.palette.black,
        margin: 0,
        minHeight: '100%',
        padding: 0,
        position: 'relative',
        zIndex: vars.zIndex.default,
    }
]);

const loginBackground = style([
    {
        '@media': {
            ...mixins.media(['md-up'], {
                backgroundImage: 'url("../../../assets/img/bg_alpha.jpg")',
                backgroundSize: 'cover',
                display: 'block',
                height: '100%',
                minHeight: '100vh',
                opacity: 0.5,
                overflow: 'hidden',
                position: 'absolute',
                width: '100%',
                zIndex: vars.zIndex.underlay,
            }),
        },
    }
]);

const loginHeader = style([
    {
        '@media': {
            ...mixins.media(['md-up'], {
                ...position('absolute', 0, 0, 0, 0),
                background: 'transparent',
            }),
        },
        background: theme.background.overlay,
        borderBottom: 'transparent',
        height: 90,
        width: '100%',
    }
]);

const loginBody = style([
    {
        '@media': {
            ...mixins.media(['md-up'], {
                '::after': {
                    content: '',
                    display: 'block',
                    height: 236
                },
                '::before': {
                    content: '',
                    display: 'block',
                    height: 91
                },
                backgroundColor: 'transparent',
                display: 'block',
                margin: '0 auto -236px',
                maxWidth: 450,
                minHeight: '100vh',
            }),
        },
        padding: '0 5%',
    }
]);

const loginContent = style([
    {
        '@media': {
            ...mixins.media(['md-up'], {
                ...padding(60, 68, 40),
                marginBottom: 90,
                minHeight: 660,
                minWidth: 450,
            }),
        },
        backgroundColor: theme.background.overlay,
        borderRadius: vars.borderRadius['3x'],
        display: 'flex',
        flexDirection: 'column',
        margin: 0,
        minWidth: '100%',
    }
]);

const loginFooter = style([
    padding(30, 0),
    {
        '@media': {
            ...mixins.media(['md-up'], {
                margin: '0 auto',
                maxWidth: 1000
            })
        },
        display: 'block',
        fontSize: '16px',
        width: '90%'
    }
]);

const loginFooterTop = style([
    margin(0, 0, 30),
    {
        fontSize: em(16),
        padding: 0
    }
]);

const loginFooterWrapper = style([
    {
        backgroundColor: theme.background.overlay,
        color: theme.tertiary.text,
        fontSize: em(16),
        height: 236,
        marginTop: 0,
        minWidth: 190,
        paddingBottom: 20,
        position: 'relative',
        width: '100%',
    }
]);

const loginTitle = style([
    {
        color: theme.primary.text,
        fontFamily: vars.fontFamily.medium,
        fontSize: '32px',
        fontWeight: vars.fontWeight.medium,
    }
]);

const logo = style([
    imgStyles.imageBox(),
    {
        marginLeft: em(48),
        width: 'fit-content'
    }
]);

const logoImage = style([
    imgStyles.image
]);

export const styles = {
    loginBackground,
    loginBody,
    loginContent,
    loginFooter,
    loginFooterTop,
    loginFooterWrapper,
    loginHeader,
    loginPage,
    loginTitle,
    logo,
    logoImage,
};

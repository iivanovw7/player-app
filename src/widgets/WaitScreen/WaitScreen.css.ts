/**
 * Module contains wait screen component styles.
 * @module src/widgets/WaitScreen/WaitScreen.css
 */

import { style } from '@vanilla-extract/css';

import { mixins, theme, imgStyles, vars, spinnerStyles } from '@/shared/ui/styles';

const spinner = style([
    spinnerStyles.spinner({
        color: 'primary'
    })
]);

const spinnerContainer = style([
    mixins.centerAbsolute(),
    {
        transform: 'translate(-50%, -50%) scale(0.8)'
    }
]);

const spinnerPath = style({
    fill: theme.common.primary
});

const avatar = style([
    imgStyles.imageBox(),
    {
        borderRadius: vars.borderRadius['2x'],
        height: 56,
        maxWidth: 56,
    },
    mixins.centerAbsolute()
]);

const avatarImage = style([
    imgStyles.image
]);

export const styles = {
    avatar,
    avatarImage,
    spinner,
    spinnerContainer,
    spinnerPath,
};

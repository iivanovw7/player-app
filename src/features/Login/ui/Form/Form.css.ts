/**
 * Module login Form styles.
 * @module src/features/Login/ui/Form/Form.css.ts
 */
import { style } from '@vanilla-extract/css';
import { em, margin, padding } from 'polished';

import { imgStyles, mixins, theme, vars, buttonStyles } from '@/shared/ui/styles';

const form = style([
    padding(20, 0, 30),
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

const title = style([
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

const submit = style([
    margin(24, 0, 12),
    buttonStyles.button({
        color: 'primary',
        fill: 'full',
        fluid: true,
        rounded: true
    }),
]);

const submitText = style([
    buttonStyles.buttonText(),
    {
        fontSize: 16,
        lineHeight: '28px'
    }
]);

const formWarningText = style([
    padding(10, 20),
    {
        backgroundColor: theme.common.warning,
        borderRadius: vars.borderRadius['3x'],
        color: theme.primary.text,
        display: 'table-cell',
        marginBottom: 16,
        verticalAlign: 'middle',
    }
]);

export const styles = {
    form,
    formWarningText,
    logo,
    logoImage,
    submit,
    submitText,
    title,
};


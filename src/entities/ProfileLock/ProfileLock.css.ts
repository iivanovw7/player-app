/**
 * Module contains unlock modal styles.
 * @module src/entities/ProfileLock/ProfileLock.css.ts
 */
import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { recipe } from '@vanilla-extract/recipes';
import { animation, em, margin, position } from 'polished';

import { vars, modalStyles, theme, buttonStyles, mixins } from '@/shared/ui/styles';

const closeBtnOffset = 4;

const modal = style([
    modalStyles.modal,
]);

const modalContent = style({
    color: vars.theme.primary.text,
    marginBottom: em(8),
});

const modalStatus = style([
    {
        '@media': {
            ...mixins.media(['lg-down'], {
                fontSize: '14px',
            }),
        },
        color: vars.theme.tertiary.text,
        fontSize: '1.3vw',
        fontWeight: vars.fontWeight.thin,
        marginBottom: em(8),
        textAlign: 'center',
    },
]);

const modalPaper = style([
    modalStyles.modalDialogPaper({
        width: 'max'
    }),
    {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        height: '100%',
        justifyContent: 'center',
        zIndex: vars.zIndex.container
    },
    position('absolute', 0, 0, 0, 0),
]);

const modalBackdrop = style([
    modalStyles.modalDialogBackdrop()
]);

const modalTitle = recipe({
    base: [
        {
            '@media': {
                ...mixins.media(['lg-down'], {
                    fontSize: '30px',
                }),
            },
            color: 'inherit',
            fontSize: '2.5vw',
            fontWeight: vars.fontWeight.medium,
            textAlign: 'center',
            userSelect: 'none',
            width: '100%',
        },
        margin(em(10), 0)
    ],
    defaultVariants: {
        error: false
    },
    variants: {
        error: {
            'true': {
                color: vars.theme.common.warning
            }
        }
    },
});

const modalClose = style([
    buttonStyles.button({
        color: 'primary',
        custom: true,
        fill: 'none',
    }),
    {
        position: 'absolute',
        right: calc.add(vars.height.header, `${closeBtnOffset}px`),
        top: calc.add(vars.height.header, `${closeBtnOffset}px`),
    },
]);

const modalCloseIconBox = style([
    buttonStyles.buttonIcon(),
]);

const modalCloseIcon = style([
    {
        height: 34,
        width: 34
    }
]);

const modalValidation = style({
    '@media': {
        ...mixins.media(['lg-down'], {
            fontSize: '14px',
        }),
    },
    color: theme.common.alert,
    fontSize: '1.3vw',
    minHeight: 36,
    textAlign: 'center',
});

const pinPad = style({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
});

const pinPadContainer = recipe({
    base: {
        color: vars.palette.black,
        direction: 'ltr',
        display: 'flex',
        flex: '0 1 auto',
        ...margin(6),
    },
    defaultVariants: {
        error: false
    },
    variants: {
        error: {
            'true': animation(['shake-it', '0.3s', 1, '0.3s'])
        }
    },
});

export const styles = {
    modal,
    modalBackdrop,
    modalClose,
    modalCloseIcon,
    modalCloseIconBox,
    modalContent,
    modalPaper,
    modalStatus,
    modalTitle,
    modalValidation,
    pinPad,
    pinPadContainer
};

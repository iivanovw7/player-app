/**
 * Module contains Modal classes.
 * @module scr/shared/style/components/Dialog/Dialog.css
 */
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { transitions } from 'polished';

import { theme } from '../../theme.css';
import { vars } from '../../vars.css';

const modal = style({
    display: 'contents'
});

const modalDialogBackdrop = recipe({
    base: {
        alignItems: 'flex-start',
        backgroundColor: theme.background['modal-backdrop-color'],
        display: 'flex',
        height: '100%',
        inset: 0,
        overflow: 'hidden scroll',
        position: 'fixed',
        zIndex: vars.zIndex.overlay,
    },
    defaultVariants: {
        outerScroll: false
    },
    variants: {
        outerScroll: {
            'true': { maxHeight: 'none' }
        },
    },
});

const modalDialogPaper = recipe({
    base: {
        backgroundColor: theme.background.global,
        borderRadius: vars.borderRadius['1x'],
        boxShadow: theme.shadow.modal,
        margin: 'auto',
        maxHeight: '100vh',
        maxWidth: '100vw',
        outline: 0,
        overflow: 'hidden',
        position: 'relative',
        ...transitions(
            ['background-color'],
            vars.transition.callback
        )
    },
    defaultVariants: {
        outerScroll: false,
        transitionWidth: false,
        width: 'medium'
    },
    variants: {
        outerScroll: {
            'true': {
                height: 'max-content',
                maxHeight: 'none',
            }
        },
        transitionWidth: {
            'true': transitions(
                ['background-color', 'width'],
                vars.transition.callback
            )
        },
        width: {
            auto: {
                width: 'auto'
            },
            large: {
                width: 696
            },
            max: {
                width: '100%'
            },
            medium: {
                width: 496
            },
        },
    },
});

export const styles = {
    modal,
    modalDialogBackdrop,
    modalDialogPaper,
};

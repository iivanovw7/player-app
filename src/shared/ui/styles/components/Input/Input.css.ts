/**
 * Module contains styled `BaseInput` component.
 * @module src/shared/style/components/Input/Input.css
 */
import { recipe } from '@vanilla-extract/recipes';
import { ellipsis, rem, padding, transitions } from 'polished';

import { theme } from '../../theme.css';
import { vars } from '../../vars.css';

const input = recipe({
    base: [
        {
            border: `1px solid ${theme.border}`,
            borderRadius: vars.borderRadius['3x'],
            color: theme.primary.text,
            selectors: {
                '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
                    appearance: 'none',
                    margin: 0,
                },
                '&::placeholder': {
                    color: theme.secondary.text,
                    opacity: 1,
                    textOverflow: 'ellipsis',
                },
                '&:disabled, &:read-only': {
                    backgroundColor: theme.primary.text,
                    color: theme.secondary.text,
                    pointerEvents: 'none'
                },
                '&:focus, &:focus-visible': {
                    borderColor: theme.primary.text,
                    outline: 'none'
                },
                '&:hover': {
                    borderColor: theme.primary.text,
                },
                '&[type="number"]': {
                    appearance: 'textfield'
                },
            }
        },
        padding(0, rem(16)),
        ellipsis(),
        transitions(
            [
                'color',
                'background-color',
                'border-color'
            ],
            vars.transition.callback
        ),
    ],
    defaultVariants: {
        error: false
    },
    variants: {
        error: {
            'true': {
                selectors: {
                    '&:not(:disabled, :read-only)': {
                        borderColor: theme.common.alert
                    }
                }
            }
        }
    },
});

export const styles = {
    input
};

/**
 * Module contains Link base classes.
 * @module src/shared/style/components/Link/Link.css
 */

import { recipe } from '@vanilla-extract/recipes';
import { ellipsis, rem, margin, transitions } from 'polished';

import type { Color } from '#/styles';

import { theme } from '../../theme.css';
import { vars } from '../../vars.css';

/**
 * Gets link color styles.
 * @param {Color} type - color scheme type.
 * @return {CSSRule} returns color styles.
 */
const getColor = (type: Color) => ({
    color: theme[type].linkText,
    selectors: {
        '&:not(&[data-disabled])&:hover, &:not(&[data-disabled])&:focus-visible': {
            color: theme[type].linkTextAccent,
        },
    }
});

const link = recipe({
    base: {
        ...transitions(
            ['color'],
            vars.transition.callback
        ),
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
        display: 'inline',
        font: 'inherit',
        outline: 'none',
        padding: 'none',
        textDecoration: 'none',
    },
    compoundVariants: [
        {
            style: getColor('primary'),
            variants: { color: 'primary', disabled: false },
        },
        {
            style: getColor('secondary'),
            variants: { color: 'secondary', disabled: false },
        },
        {
            style: getColor('tertiary'),
            variants: { color: 'tertiary', disabled: false },
        },
        {
            style: { color: theme.primary.linkTextDisabled },
            variants: { color: 'primary', disabled: true },
        },
        {
            style: { color: theme.secondary.linkTextDisabled },
            variants: { color: 'secondary', disabled: true },
        },
        {
            style: { color: theme.tertiary.linkTextDisabled },
            variants: { color: 'tertiary', disabled: true },
        },
        {
            style: { pointerEvents: 'none' },
            variants: { color: 'inherit', disabled: true },
        }
    ],
    defaultVariants: {
        align: 'left',
        color: 'inherit',
        disabled: false,
        icon: false,
        image: false,
        underline: 'never',
    },
    variants: {
        align: {
            'center': { textAlign: 'center' },
            'left': { textAlign: 'left' },
            'right': { textAlign: 'right' },
        },
        color: {
            inherit: {
                color: 'inherit',
            },
            primary: {},
            secondary: {},
            tertiary: {},
        },
        disabled: {
            'true': {
                pointerEvents: 'none',
            }
        },
        icon: {
            'true': {
                alignItems: 'center',
                display: 'inline-flex',
                verticalAlign: 'baseline'
            }
        },
        image: {
            'true': {
                alignItems: 'center',
                display: 'inline-flex',
                verticalAlign: 'baseline'
            }
        },
        underline: {
            always: {
                textDecoration: 'underline'
            },
            hover: {
                selectors: {
                    '&[data-disabled="false"]&:hover, &[data-disabled="false"]&:focus-visible': {
                        textDecoration: 'underline'
                    },
                }
            },
            never: {
                textDecoration: 'none'
            }
        },
    },
});

const linkImage = recipe({
    base: {
        flexShrink: 0,
        marginLeft: rem(4)
    },
    compoundVariants: [
        {
            style: { color: theme.primary.linkTextDisabled },
            variants: { color: 'primary', disabled: true },

        },
        {
            style: { color: theme.secondary.linkTextDisabled },
            variants: { color: 'secondary', disabled: true },

        },
        {
            style: { color: theme.tertiary.linkTextDisabled },
            variants: { color: 'tertiary', disabled: true },
        },
    ],
    defaultVariants: {
        color: 'primary',
        disabled: false,
        offset: 'medium',
        onlyChild: false,
        position: 'end',
    },
    variants: {
        color: {
            primary: { color: theme.primary.linkText },
            secondary: { color: theme.secondary.linkText },
            tertiary: { color: theme.tertiary.linkText },
        },
        disabled: {
            'true': { color: theme.primary.linkTextDisabled }
        },
        offset: {
            large: { marginLeft: rem(8) },
            medium: { marginLeft: rem(6) },
            small: { marginLeft: rem(4) },
        },
        onlyChild: {
            'true': { marginLeft: 0 }
        },
        position: {
            end: {},
            start: {
                order: -1,
                ...margin(0, rem(8), 0, 0),
            },
        },
    },
});

const linkIcon = recipe({
    base: {
        selectors: {
            'svg &': {
                flexShrink: 0,
                marginLeft: rem(4)
            }
        }
    },
    compoundVariants: [
        {
            style: { color: theme.primary.linkTextDisabled },
            variants: { color: 'primary', disabled: true },
        },
        {
            style: { color: theme.secondary.linkTextDisabled },
            variants: { color: 'secondary', disabled: true },
        },
        {
            style: { color: theme.tertiary.linkTextDisabled },
            variants: { color: 'tertiary', disabled: true },
        },
    ],
    defaultVariants: {
        color: 'primary',
        disabled: false,
        offset: 'medium',
        onlyChild: false,
        position: 'end',
    },
    variants: {
        color: {
            primary: { color: theme.primary.linkText },
            secondary: { color: theme.secondary.linkText },
            tertiary: { color: theme.tertiary.linkText },
        },
        disabled: {
            'true': { color: theme.primary.linkTextDisabled }
        },
        offset: {
            large: {
                selectors: {
                    'svg &': { marginLeft: rem(8) }
                }
            },
            medium: {
                selectors: {
                    'svg &': { marginLeft: rem(6) }
                }
            },
            small: {
                selectors: {
                    'svg &': { marginLeft: rem(4) }
                }
            },
        },
        onlyChild: {
            'true': {
                selectors: {
                    'svg &': { marginLeft: 0 }
                }
            }
        },
        position: {
            end: {},
            start: {
                order: -1,
                ...margin(0, rem(4), 0, 0),
            },
        },
    },
});

const linkText = recipe({
    base: {},
    defaultVariants: {
        noWrap: false
    },
    variants: {
        noWrap: {
            'true': {
                ...ellipsis(),
            }
        }
    },
});

export const styles = {
    link,
    linkIcon,
    linkImage,
    linkText
};

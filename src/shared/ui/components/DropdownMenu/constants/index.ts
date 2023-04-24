/**
 * Module contains DropdownMenu constants.
 * @module src/shared/ui/components/DropdownMenu/constants
 */

export const StaticSide = {
    bottom: 'top',
    left: 'right',
    right: 'left',
    top: 'bottom',
} as const;

export type StaticSide = Readonly<typeof StaticSide[keyof typeof StaticSide]>;

/**
 * Dropdown arrow size in `px`.
 * @readonly
 * @type {number}
 */
export const ARROW_SIZE: Readonly<Pixels> = 8;

export const ItemType = {
    button: 'button',
    divider: 'divider',
    link: 'link',
    linkButton: 'link-button',
    navLink: 'navLink'
} as const;

export type ItemType = Readonly<typeof ItemType[keyof typeof ItemType]>;

export const CLOSE_DELAY: Milliseconds = 500;

/**
 * Module contains DropdownMenu constants.
 * @module src/shared/ui/components/DropdownMenu/constants
 */

export const ItemType = {
    button: 'button',
    divider: 'divider',
    navLink: 'navLink',
} as const;

export type ItemType = Readonly<typeof ItemType[keyof typeof ItemType]>;

export const OPEN_DELAY: Milliseconds = 100;
export const CLOSE_DELAY: Milliseconds = 600;

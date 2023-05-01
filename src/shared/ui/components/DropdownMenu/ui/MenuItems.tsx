/**
 * Module contains DropdownMenu MenuItems element.
 * @module src/shared/ui/components/DropdownMenu/ui/MenuItem
 */
import type { TMenuItem } from './MenuItem';
import { MenuItem } from './MenuItem';

export type MenuItemsProps = {
    class?: string;
    items?: TMenuItem[];
    menuItemClass?: string;
    style?: JSX.CSSProperties;
};

/**
 * Creates `MenuItems` component.
 * @constructor
 * @name src/shared/ui/components/DropdownMenu/ui/MenuItems
 * @method
 * @param {object} props - contains component props.
 *
 * @return {JSXElement} React component with children.
 */
export const MenuItems = (props: MenuItemsProps) => (
    <ul class={props.class} style={props.style}>
        <For each={props.items}>
            {(item) => (
                <MenuItem
                    item={item}
                    class={props.menuItemClass}
                />
            )}
        </For>
    </ul>
);

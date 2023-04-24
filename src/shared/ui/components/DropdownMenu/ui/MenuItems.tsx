/**
 * Module contains DropdownMenu MenuItems element.
 * @module src/shared/ui/components/DropdownMenu/ui/MenuItem
 */
import { noop } from '../../../../utils';

import type { MenuItemProps, TMenuItem } from './MenuItem';
import { MenuItem } from './MenuItem';

export type MenuItemsProps = Pick<MenuItemProps, 'onItemClick'> & {
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
export const MenuItems = (props: MenuItemsProps) => {
    return (
        <ul class={props.class} style={props.style}>
            <For each={props.items}>
                {(item) => (
                    <MenuItem
                        dataActive={false}
                        item={item}
                        class={props.menuItemClass}
                        onItemClick={noop}
                    />
                )}
            </For>
        </ul>
    );
};

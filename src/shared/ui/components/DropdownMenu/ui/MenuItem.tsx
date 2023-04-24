/**
 * Module contains MenuItem element.
 * @module src/shared/ui/components/DropdownMenu/ui/MenuItem
 */
import type { Size } from '#/styles';

import { KeyMap, setEventValue } from '../../../../utils';
import type { ButtonProps } from '../../Button';
import { Button } from '../../Button';
import type { LinkProps, LinkButtonProps } from '../../Link';
import { Link, LinkButton } from '../../Link';
import type { NavLinkProps } from '../../NavLink';
import { NavLink } from '../../NavLink';
import { ItemType } from '../constants';

export type MenuItemBase<Type extends ItemType> = {
    active?: boolean;
    class?: string;
    disabled?: boolean;
    onClick?: (eventData: Event) => void;
    style?: JSX.CSSProperties;
    text?: JSXElement;
    type: Type;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value?: any;
};

// eslint-disable-next-line max-len
export type MenuItemButton = MenuItemBase<'button'> & ButtonProps;
export type MenuItemLink = MenuItemBase<'link'> & LinkProps;
export type MenuItemLinkButton = MenuItemBase<'link-button'> & LinkButtonProps;
export type MenuItemNavLink = MenuItemBase<'navLink'> & NavLinkProps;
export type MenuItemDivider = Omit<MenuItemBase<'divider'>, 'onClick' | 'disabled' | 'active' | 'text'>;
export type TMenuItem = MenuItemButton | MenuItemLink | MenuItemDivider | MenuItemNavLink | MenuItemLinkButton;

export type MenuItemProps = {
    class?: string;
    dataActive?: boolean;
    item: TMenuItem;
    itemSize?: Size;
    onItemClick?: (eventData: Event) => void;
};

/**
 * Creates `MenuItems` component.
 * @constructor
 * @method
 * @name scr/shared/ui/components/DropdownMenu/ui/MenuItem
 * @param {object} props - contains component props.
 * @return {JSXElement} React component with children.
 */
export const MenuItem = (props: MenuItemProps) => {
    // eslint-disable-next-line require-jsdoc
    const isDivider = () => props.item.type === ItemType.divider;

    // eslint-disable-next-line require-jsdoc
    const itemClass = () => (isDivider()
        ? ''
        : props.class);

    /**
     * Item click handler.
     * @param {MouseEvent} baseEvent - base event data.
     */
    const handleClick = (baseEvent: MouseEvent) => {
        const eventData = setEventValue(baseEvent, props.item.value);

        (props.item as MenuItemButton).onClick?.(eventData);
        props.onItemClick?.(eventData);
    };

    /**
     * Keydown handler.
     * @param {MouseEvent} baseEvent - base event data.
     */
    const handleKeyDown = (baseEvent: KeyboardEvent) => {
        const eventData = setEventValue(baseEvent, props.item.value);

        switch (baseEvent.key) {
            case KeyMap.Enter: {
                (props.item as MenuItemButton).onClick?.(eventData);
                props.onItemClick?.(eventData);
                break;
            }
            default: {
                break;
            }
        }
    };

    return (
        <li class={itemClass()}>
            <Switch>
                <Match when={isDivider()}>
                    <li class={props.item.class}/>
                </Match>
                <Match when={props.item.type === ItemType.link}>
                    <Link {...props.item as LinkProps} />
                </Match>
                <Match when={props.item.type === ItemType.linkButton}>
                    <LinkButton {...props.item as LinkButtonProps} />
                </Match>
                <Match when={props.item.type === ItemType.navLink}>
                    <NavLink {...props.item as NavLinkProps} />
                </Match>
                <Match when={props.item.type === ItemType.button}>
                    <Button
                        {...props.item as ButtonProps}
                        onClick={handleClick}
                        onKeyDown={handleKeyDown}
                    />
                </Match>
            </Switch>
        </li>
    );
};

/**
 * Module contains application navigation.
 * @module src/features/Navigation/Navigation
 */
import { useMatch } from '@solidjs/router';

import {
    useBreakpoints,
    DropdownMenu,
    NavLink,
    menuItems
} from '@/shared';

import { styles } from './Navigation.css';

/**
 * Navigation component.
 * @method
 * @return {JSXElement} React component with children.
 * @constructor
 */
export const Navigation = () => {
    const { lgDown, lgUp } = useBreakpoints();

    /**
     * Path matcher
     * @param {string} path - path to be matched with.
     * @return {Accessor<PathMatch | undefined>} router match result.
     */
    const match = (path: string) => useMatch(() => path);

    return (
        <Switch>
            <Match when={lgDown()}>
                <DropdownMenu
                    classes={{
                        arrowFloating: styles.menuArrowFloating,
                        arrowToggle: styles.menuArrowToggle,
                        item: styles.menuItem,
                        items: styles.menuItems,
                        menu: styles.menu,
                        toggle: styles.menuToggle,
                    }}
                    items={menuItems.map(({ to, text, disabled }) => ({
                        active: !! match(to),
                        'class': styles.menuItemLink,
                        disabled,
                        href: to,
                        text,
                        textClass: styles.navLinkText,
                        type: DropdownMenu.ItemType.navLink,
                    }))}
                    offset={{
                        alignmentAxis: 10,
                        mainAxis: 30
                    }}
                    placement="bottom"
                    withArrowFloating
                    withArrowToggle
                >
                    Browse
                </DropdownMenu>
            </Match>
            <Match when={lgUp()}>
                <For each={menuItems}>
                    {(item) => (
                        <div class={styles.navLinkBox}>
                            <NavLink
                                class={styles.navLink}
                                disabled={item.disabled}
                                text={item.text}
                                textClass={styles.navLinkText}
                                href={item.to}
                            />
                        </div>
                    )}
                </For>
            </Match>
        </Switch>
    );
};

/*
<DropdownMenu
                    classes={{
                        arrowFloating: styles.menuArrowFloating,
                        arrowToggle: styles.menuArrowToggle,
                        item: styles.menuItem,
                        items: styles.menuItems,
                        menu: styles.menu,
                        toggle: styles.menuToggle,
                    }}
                    items={menuItems.map(({ to, text, disabled }) => ({
                        active: !! match(to),
                        'class': styles.menuItemLink,
                        disabled,
                        text,
                        textClass: styles.navLinkText,
                        to,
                        type: DropdownMenu.ItemType.navLink,
                    }))}
                    offset={{
                        alignmentAxis: 6,
                        mainAxis: 30
                    }}
                    placement="bottom"
                    withArrowFloating
                    withArrowToggle
                >
                    Browse
                </DropdownMenu>
 */

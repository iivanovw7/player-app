/**
 * Module contains application header menu.
 * @module src/features/Menu/Menu
 */

import type { TProfile } from '#/api/basic-api';
import {
    useBreakpoints,
    DropdownMenu,
    Icon,
    Img,
    profilesStore,
    type LinkButtonProps,
} from '@/shared';

import { withAvatarPlaceholder } from './lib';
import { styles } from './Menu.css';

export type MenuProps = {
    onProfileClick: (newProfile: TProfile) => Promise<void>;
};

/**
 * Header Menu component.
 * @method
 * @param {ProfileProps} props - contains component props.
 * @return {JSXElement} React component with children.
 * @constructor
 */
export const Menu = (props: MenuProps) => {
    const { mdUp } = useBreakpoints();

    /**
     * Logout current user profile.
     */
    const handleLogout: LinkButtonProps['onClick'] = () => {
        profilesStore.actions.resetProfile();
    };

    return (
        <DropdownMenu
            classes={{
                arrowFloating: styles.menuArrowFloating,
                arrowToggle: styles.menuArrowToggle,
                item: styles.menuItem,
                items: styles.menuItems,
                menu: styles.menu,
                toggle: styles.menuToggle,
            }}
            items={[
                ...profilesStore.state.options.map((profile: TProfile) => ({
                    children: (
                        profile.lock && (
                            <Icon
                                class={styles.menuLinkIconBox}
                                iconsClass={styles.menuLinkIcon}
                                name="lock"
                            />
                        )
                    ),
                    'class': styles.menuItemLink,
                    image: {
                        alt: 'avatar',
                        'class': styles.menuItemLinkImageBox,
                        imageClass: styles.menuItemLinkImage,
                        size: 30,
                        src: profile.avatar,
                    },
                    onClick: async () => props.onProfileClick(profile),
                    text: profile.name,
                    textClass: styles.menuLinkText,
                    type: DropdownMenu.ItemType.linkButton,
                })),
                {
                    'class': styles.menuDivider,
                    type: DropdownMenu.ItemType.divider
                },
                {
                    'class': styles.menuLogout,
                    onClick: handleLogout,
                    text: 'Sign out of Netflix',
                    type: DropdownMenu.ItemType.linkButton,
                }
            ]}
            offset={{
                alignmentAxis: 6,
                mainAxis: 16
            }}
            placement="bottom-start"
            withArrowToggle={mdUp()}
            withArrowFloating
        >
            <Img
                alt="avatar"
                class={styles.menuAvatar}
                imageClass={styles.menuAvatarImage}
                size={30}
                src={withAvatarPlaceholder(
                    profilesStore.state.active?.avatar
                )}
            />
        </DropdownMenu>
    );
};


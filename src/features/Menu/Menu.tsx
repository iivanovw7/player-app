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
    authStore,
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
 * @name src/features/Menu/Menu
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
        authStore.actions.logout();
        profilesStore.actions.resetActiveProfile();
    };

    /**
     * Profile editor imitation.
     */
    const handleProfilesEdit = () => {
        profilesStore.actions.resetActiveProfile();
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
                ...profilesStore.state.availableOptions.map((profile: TProfile) => ({
                    children: (
                        profile.lock && (
                            <Icon
                                class={styles.menuLinkIconBox}
                                iconClass={styles.menuLinkIcon}
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
                    onSelect: async () => props.onProfileClick(profile),
                    text: profile.name,
                    textClass: styles.menuLinkText,
                    type: DropdownMenu.ItemType.button,
                })),
                {
                    'class': styles.menuItemLink,
                    icon: {
                        'class': styles.menuItemLinkIconBox,
                        iconClass: styles.menuItemLinkIcon,
                        name: 'edit',
                    },
                    onSelect: handleProfilesEdit,
                    text: 'Manage Profiles',
                    type: DropdownMenu.ItemType.button,
                },
                {
                    'class': styles.menuDivider,
                    type: DropdownMenu.ItemType.divider
                },
                {
                    'class': styles.menuLogout,
                    onSelect: handleLogout,
                    text: 'Sign out of Netflix',
                    type: DropdownMenu.ItemType.button,
                }
            ]}
            gutter={6}
            shift={16}
            placement="bottom-start"
            withArrowToggle={mdUp()}
            withArrowFloating
        >
            <Img
                alt="avatar"
                class={styles.menuAvatar}
                imageClass={styles.menuAvatarImage}
                size={30}
                src={withAvatarPlaceholder(profilesStore.state.active?.avatar)}
            />
        </DropdownMenu>
    );
};


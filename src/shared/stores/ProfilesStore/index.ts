/**
 * Module contains global application profiles store.
 * @module src/shared/stores/ProfileStore
 */

import { defaultTo, path, pipe } from 'ramda';

import type { TProfile } from '#/api/basic-api';
import { profilesApi } from '@/shared/api';

import { getLogger } from '../../log';
import { getLocalProfile, setLocalProfile } from '../../storage';
import { makeApiRequest, wait } from '../../utils';
import { settingsStore } from '../SettingStore';

declare global {
    interface IGlobalStore {
        profiles: ProfilesSore;
    }
}

type ProfilesSoreState = {
    active: Nullable<TProfile>;
    availableOptions: Array<TProfile>;
    options: Array<TProfile>;
};

type ProfilesSoreActions = {
    changeUserProfile: (profile: Nullable<TProfile>) => Promise<void>;
    loadLocalProfile: () => void;
    loadProfiles: () => Promise<void>;
    resetProfile: () => void;
};

type ProfilesSore = {
    actions: ProfilesSoreActions;
    state: ProfilesSoreState
};

const logger = getLogger('ProfilesStore');

const getProfiles = pipe(path<TProfile[]>(['data', 'result', 'data']), defaultTo([]));

/**
 *  Creates settings store instance.
 *  @return {ProfilesSore} store, containing state and action.
 */
const createProfilesStore = (): ProfilesSore => {
    let availableOptions: Accessor<TProfile[]>;

    const [state, setState] = createStore<ProfilesSoreState>({
        active: getLocalProfile(),
        /** Available options getter. */
        get availableOptions() {
            return availableOptions();
        },
        options: [],
    });

    availableOptions = createMemo(() => state.options.filter(({ id }) => id !== state.active?.id));

    /**
     *  Sets new user`s profiles.
     *  @private
     *  @param {TProfile} profile - profiles list.
     */
    const setProfile = (profile: Nullable<TProfile>) => {
        setLocalProfile(profile);
        updateProfile(profile);
    };

    /**
     *  Changes global loader state.
     *  @private
     *  @param {TProfile} profile - profiles list.
     *  @return {Function} loader control function.
     */
    const setProfileLoader = (profile: Nullable<TProfile>) => (isLoading: boolean) => {
        if (isLoading) {
            settingsStore.actions.startWait(profile);
        }
        else {
            settingsStore.actions.stopWait();
        }
    };

    /**
     * Updates user active profiles.
     * @private
     * @param {Nullable<TProfile>} profile - represents user profile.
     */
    const updateProfile = (profile: Nullable<TProfile>) => {
        setState({
            active: profile
        });
    };

    /**
     * Updates user profiles.
     * @private
     * @param {Array.<TProfile>} profiles list
     */
    const updateOptions = (profiles: TProfile[]) => {
        setState({
            options: profiles
        });
    };

    return {
        actions: {
            /**
             * Sets new use profile.
             * @param {Object} profile - user profile.
             */
            changeUserProfile: async (profile: Nullable<TProfile>) => {
                await makeApiRequest({
                    onRequestError: () => {
                        logger.error('Failed to load profiles ');
                    },
                    request: async () => {
                        await wait();

                        setProfile(profile);
                    },
                    setLoading: setProfileLoader(profile)
                });
            },
            /** Loads user profile from local storage. */
            loadLocalProfile: (): void => {
                updateProfile(getLocalProfile());
            },
            /**
             * Fetches available user`s profiles.
             * @param {Function} [setLoading] - set loading method.
             * @param {Function} [onRequestError] - set loading method.
             */
            loadProfiles: async () => {
                await makeApiRequest({
                    request: async () => {
                        const profiles: TProfile[] = getProfiles(
                            await profilesApi.getProfiles()
                        );

                        updateOptions(profiles);
                    },
                });
            },
            /** Removes users active profile. */
            resetProfile: (): void => {
                setLocalProfile(null);
                updateProfile(null);
            }
        },
        state
    };
};

export const profilesStore = createRoot(createProfilesStore);


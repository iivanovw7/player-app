/**
 * Module contains global application auth store.
 * @module src/shared/stores/AuthStore
 */
import { useIntervalFn } from 'solidjs-use';

import type { TLoginData } from '#/api/basic-api';

import { authApi } from '../../api/http/basic-api-auth';
import { getLogger } from '../../log';
import { setAccessToken, getAccessToken } from '../../storage';
import { makeApiRequest, MILLISECONDS_IN_MINUTE } from '../../utils';

declare global {
    interface IGlobalStore {
        auth: AuthStore;
    }
}

export type AuthStoreActions = {
    login: (data: TLoginData) => Promise<unknown>;
    logout: () => void;
    refreshToken: () => Promise<unknown>;
};

export type AuthStoreState = {
    accessToken: Nullable<string>;
};

export type AuthStore = {
    actions: AuthStoreActions;
    state: AuthStoreState
};

const logger = getLogger('AuthStore');

/**
 *  Creates auth store instance.
 *  @return {AuthStore} store, containing state and action.
 */
const createAuthStore = (): AuthStore => {
    const [state, setState] = createStore<AuthStoreState>({
        accessToken: getAccessToken()
    });

    /**
     * Updates short term access token in local state.
     * @param {string} [accessToken] access token.
     */
    const updateAccessToken = (accessToken?: Maybe<string>) => {
        const token = accessToken || null;

        setAccessToken(token);

        setState({
            accessToken: token
        });
    };

    /**
     * Updates short term access token.
     */
    const refreshToken = async () => {
        if (state.accessToken) {
            await makeApiRequest({
                onRequestError: () => {
                    logger.error('Refresh auth token error.');

                    updateAccessToken(null);
                },
                request: async () => {
                    const { result: { accessToken } } = await authApi.refresh();

                    updateAccessToken(accessToken);
                }
            });
        }
    };

    useIntervalFn(
        refreshToken as AnyFunction,
        MILLISECONDS_IN_MINUTE,
        { immediate: true }
    );

    return {
        actions: {
            login: async ({ password, username }) => {
                await makeApiRequest({
                    onRequestError: (error) => {
                        logger.error('Failed to login user');

                        updateAccessToken(null);

                        throw error;
                    },
                    request: async () => {
                        const { result: { accessToken } } = await authApi.login({
                            password,
                            username
                        });

                        updateAccessToken(accessToken);
                    }
                });
            },
            logout: () => {
                updateAccessToken(null);
            },
            refreshToken
        },
        state
    };
};

export const authStore = createRoot(createAuthStore);

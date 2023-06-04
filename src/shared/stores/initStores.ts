/**
 * Module contains global stores initialization method.
 * @module src/shared/stores/initStores
 */

import { authStore } from './AuthStore';
import { controller } from './controller';
import { profilesStore } from './ProfilesStore';
import { settingsStore } from './SettingStore';

controller.onInit(authStore.actions.refreshToken as AnyFunction);

export const initStores = controller.init({
    auth: authStore,
    profiles: profilesStore,
    settings: settingsStore,
});

/**
 * Module contains global stores initialization method.
 * @module src/shared/stores/initStores
 */

import { authStore } from './AuthStore';
import { controller } from './controller';
import { profilesStore } from './ProfilesStore';
import { settingsStore } from './SettingStore';

controller.onInit(() => {
    // eslint-disable-next-line no-void
    void authStore.actions.refreshToken();
});

export const initStores = controller.init({
    auth: authStore,
    profiles: profilesStore,
    settings: settingsStore,
});

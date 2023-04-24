/**
 * Module contains global stores initialization method.
 * @module src/shared/stores/initStores
 */

import { controller } from './controller';
import { profilesStore } from './ProfilesStore';
import { settingsStore } from './SettingStore';

export const initStores = controller.init({
    profiles: profilesStore,
    settings: settingsStore,
});

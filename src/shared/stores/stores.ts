/**
 * Module contains global application stores public API.
 * @module src/shared/stores
 */
import { controller } from './controller';

export { settingsStore } from './SettingStore';
export { profilesStore } from './ProfilesStore';

export * from './initStores';

export const { stores } = controller;

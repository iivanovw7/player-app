/**
 * Module contains locale local storage.
 * @module src/shared/storage/locale
 */
import { storage, setStorage, StorageKey } from './storage';

/**
 * Saves new user locale.
 * @param {string} locale - user locale.
 */
export const setLocale = (locale?: Maybe<string>): void => {
    setStorage(StorageKey.locale, locale || null);
};

/**
 * Retrieves locale out of local storage.
 * @return {string | null} - locale - browser locale.
 */
export const getLocale = (): string => {
    return (storage[StorageKey.locale] || null) as string;
};

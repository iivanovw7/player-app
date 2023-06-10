/**
 * Module contains auth local storage.
 * @module src/shared/storage/auth
 */
import { StorageKey, setStorage, storage } from './storage';

/**
 * Saves new user accessToken.
 * @param {string} accessToken - accessToken.
 */
export const setAccessToken = (accessToken?: Maybe<string>): void => {
    setStorage(StorageKey.accessToken, accessToken || null);
};

/**
 * Retrieves accessToken out of local storage.
 * @returns {string | null} - accessToken.
 */
export const getAccessToken = (): string => {
    return (storage[StorageKey.accessToken] || null) as string;
};

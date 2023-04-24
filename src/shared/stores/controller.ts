/**
 * Module contains global stores controller.
 * @module src/shared/stores/controller
 */
export const controller = {
    /**
     * Initializes the root store.
     * @param {IGlobalStore} stores - root stores instances.
     * @return {Function} init method.
     */
    init(stores: IGlobalStore) {
        Object.assign(this.stores, stores);

        return () => this.stores;
    },
    stores: {} as IGlobalStore,
};

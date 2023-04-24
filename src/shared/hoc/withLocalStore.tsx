/**
 * Module contains withLocalStore hoc.
 * @module src/shared/hoc/withLocalStore
 */
export type UseLocalStore<T extends { actions: object, state: object }> = () => T;

export type WithLocalStore = {
    <Props>(Cmp: Component<Props>): (props: Props) => JSXElement;
};

/**
 * Creates local store hook and provider.
 * @param {Function} storeConstructor - local store constructor.
 * @return {Array} local store hook and provider.
 */
export const withLocalStore = <Store extends { actions: object, state: object }>(storeConstructor: () => Store): [
    UseLocalStore<Store>,
    WithLocalStore
] => {
    const store = storeConstructor();
    const LocalStoreContext = createContext<Store>(store);

    /**
     * Local store hook.
     * @return {Function} local store hook.
     */
    const useLocalStore = () => useContext<Store>(LocalStoreContext);

    /**
     * Creates local store provider.
     * @param {Component} Cmp - component.
     * @return {Component} component
     */
    const withProvider = (Cmp) => (props) => (
        <LocalStoreContext.Provider value={store}>
            <Cmp {...props} />
        </LocalStoreContext.Provider>
    );

    return [
        useLocalStore,
        withProvider
    ];
};


/**
 * Contains application routing config.
 * @module src/shared/ui/routes/routes
 */

/**
 * Application base route paths.
 * @readonly
 * @enum {string}
 */
export const basePath = {
    browse: '/browse',
    home: '/',
    notFound: '/404',
    search: '/search'
};

const { browse } = basePath;

/**
 * Application Route paths.
 * @readonly
 * @enum {string}
 */
export const routePath = {
    browse,
    genre: `${browse}/genre`,
    home: basePath.home,
    latest: `${browse}/latest`,
    list: `${browse}/list`,
    notFound: basePath.notFound,
    search: basePath.search,
};

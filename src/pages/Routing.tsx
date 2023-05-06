/**
 * Module contains application routing component.
 * @module src/pages/Routing
 */

import { Routes, Route, Navigate } from '@solidjs/router';

import { lazyImport, routePath } from '@/shared';

import { PageRoute } from './PageRoute';

const { Browse } = lazyImport(() => import('./Browse'));
const { Login } = lazyImport(() => import('./Login'));
const { NotFound } = lazyImport(() => import('./NotFound'));

const {
    browse,
    home,
    notFound,
    login
} = routePath;

/**
 * Contains application routing.
 * @method
 * @constructor
 * @return {JSXElement} component with children.
 */
export const Routing = () => {
    return (
        <Routes>
            <PageRoute component={Browse} path={browse} />
            <Route component={NotFound} path={notFound} />
            <Route component={Login} path={login} />
            <Route element={<Navigate href={browse} />} path={home} />
            <Route element={<Navigate href={notFound} />} path="/*" />
        </Routes>
    );
};

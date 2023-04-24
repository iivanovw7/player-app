/**
 * Module contains application routing component.
 * @module src/pages/Routing
 */

import { Routes, Route, Navigate } from '@solidjs/router';

import { lazyImport, routePath } from '@/shared';

const { Browse } = lazyImport(() => import('./Browse'));
const { NotFound } = lazyImport(() => import('./NotFound'));

const {
    browse,
    home,
    notFound
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
            <Route component={Browse} path={browse} />
            <Route component={NotFound} path={notFound} />
            <Route element={<Navigate href={browse} />} path={home} />
            <Route element={<Navigate href={notFound} />} path="/*" />
        </Routes>
    );
};

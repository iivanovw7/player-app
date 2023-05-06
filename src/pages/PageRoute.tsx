/**
 * Module contains application page route component.
 * @module src/pages/PageRoute
 */

import { Route, useNavigate } from '@solidjs/router';
import type { RouteProps } from '@solidjs/router/dist/components';

import { authStore, routePath } from '@/shared';

/**
 * Contains application page routing.
 * @method
 * @constructor
 * @param {RouteProps} props - route props.
 * @return {JSXElement} component with children.
 */
export const PageRoute = <S extends string>(props: RouteProps<S>) => {
    const navigate = useNavigate();

    createEffect(() => {
        if (! authStore.state.accessToken) {
            navigate(routePath.login, { replace: true });
        }
    });

    return <Route {...props} />;
};

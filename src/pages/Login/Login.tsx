/**
 * Module contains `Login` page.
 * @module src/pages/Login/Login
 */
import { useNavigate } from '@solidjs/router';

import { Login as LoginForm } from '@/features';
import { authStore, routePath } from '@/shared';

/**
 * `Login` page.
 * @method
 * @constructor
 * @return {JSXElement} component with children.
 */
export const Login = () => {
    const navigate = useNavigate();

    createEffect(() => {
        if (authStore.state.accessToken) {
            navigate(routePath.browse, { replace: true });
        }
    });

    return <LoginForm />;
};

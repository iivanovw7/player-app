/**
 * Module contains `Login` page.
 * @module src/pages/Login/Login
 */
import { useNavigate } from '@solidjs/router';

import { Button, authStore, routePath } from '@/shared';
import { Header } from '@/widgets';

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

    // TODO: Login scene
    return (
        <div>
            <Header />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Button
                text="Login"
                onClick={() => {
                    // eslint-disable-next-line no-void
                    void authStore.actions.login({
                        password: 'User',
                        username: 'User',
                    });
                }}
            />
        </div>
    );
};

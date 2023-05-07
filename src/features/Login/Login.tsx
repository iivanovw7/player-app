/**
 * Module login form.
 * @module src/features/Login/Login
 */
import { authStore, Button, Img } from '@/shared';

import Logo from '../../../assets/img/logo-v7.png?w=200&png&imagetools';

import { styles } from './Login.css';

const MESSAGES = {
    footerTop: 'Questions? Call 800 855 855',
    title: 'Sign In',
};

/**
 * Login form component.
 * @method
 * @name src/features/Login/Login
 * @param {ProfileProps} props - contains component props.
 * @return {JSXElement} React component with children.
 * @constructor
 */
export const Login = () => {
    return (
        <div class={styles.loginPage}>
            <div class={styles.loginBackground} />
            <div class={styles.loginHeader}>
                <Img
                    alt="Netflix"
                    class={styles.logo}
                    imageClass={styles.logoImage}
                    src={Logo}
                />
            </div>
            <div class={styles.loginBody}>
                <div class={styles.loginContent}>
                    <h1 class={styles.loginTitle}>
                        {MESSAGES.title}
                    </h1>
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
            </div>
            <div class={styles.loginFooterWrapper}>
                <div class={styles.loginFooter}>
                    <p class={styles.loginFooterTop}>
                        {MESSAGES.footerTop}
                    </p>
                </div>
            </div>
        </div>
    );
};

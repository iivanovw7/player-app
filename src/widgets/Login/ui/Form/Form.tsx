/**
 * Module contains login form.
 * @module src/features/Login/ui/Form/Form
 */
import { useActiveElement } from 'solidjs-use';

import {
    Button,
    type InputProps,
    type LinkButtonProps,
    LinkButton,
    useLocale
} from '@/shared';

import { messages } from '../../lib';
import type { LoginForm } from '../../model';
import { useLoginState } from '../../model';
import { FormField } from '../FormField';
import { FormFooter } from '../FormFooter';

import { styles } from './Form.css';

type PasswordInputType = 'password' | 'text';

/**
 * Form component.
 * @method
 * @name src/features/Login/ui/Form/Form
 * @return {JSXElement} React component with children.
 * @constructor
 */
export const Form = () => {
    const { getText } = useLocale();
    const { actions, state } = useLoginState();

    const activeElement = useActiveElement();
    const [passwordInputRef, setPasswordInputRef] = createSignal<HTMLInputElement>();
    const [passwordType, setPasswordType] = createSignal<PasswordInputType>('password');

    const handlePasswordChange: LinkButtonProps['onClick'] = (eventData) => {
        eventData.preventDefault();

        setPasswordType(passwordType() === 'password'
            ? 'text'
            : 'password');
    };

    const handleChange = (key): InputProps['onChange'] => (value: string) => {
        actions.setFormValue(key, value);
    };

    const handleFocusOut = (key: keyof LoginForm): InputProps['onFocusOut'] => () => {
        if (activeElement() !== passwordInputRef()) {
            actions.enableFieldValidation(key);
        }
    };

    const handleSubmit = async (eventData) => {
        eventData.preventDefault();

        await actions.submitForm();
    };

    return (
        <form
            class={styles.form}
            onSubmit={handleSubmit as AnyFunction}
        >
            <h1 class={styles.title}>
                {getText(messages.formSignIn)}
            </h1>
            <Switch>
                <Match when={state.errors.username}>
                    <div class={styles.formWarningText}>
                        {getText(messages.formWarningUsername)}
                    </div>
                </Match>
                <Match when={state.errors.password}>
                    <div class={styles.formWarningText}>
                        {getText(messages.formWarningPassword)}
                    </div>
                </Match>
            </Switch>
            <FormField
                value={state.form.username}
                validate={state.validation.username}
                label={getText(messages.formUsernamePlaceholder)}
                inputProps={{
                    autocomplete: 'username',
                    type: 'email',
                }}
                hasWarning={state.errors.username}
                onFocusOut={handleFocusOut('username')}
                onChange={handleChange('username')}
            />
            <FormField
                value={state.form.password}
                validate={state.validation.password}
                label={getText(messages.formPasswordPlaceholder)}
                inputProps={{
                    autocomplete: 'current-password',
                    ref: setPasswordInputRef,
                    type: passwordType(),
                }}
                hasWarning={state.errors.password}
                control={
                    <LinkButton
                        dataId="password-show"
                        class={styles.passwordShowButton}
                        text={passwordType() === 'password'
                            ? 'SHOW'
                            : 'HIDE'}
                        onClick={handlePasswordChange}
                    />
                }
                onFocusOut={handleFocusOut('password')}
                onChange={handleChange('password')}
            />
            <Button
                class={styles.submit}
                loaderClass={styles.submitLoader}
                textClass={styles.submitText}
                text={getText(messages.formSignIn)}
                isLoading={state.isLoading}
            />
            <FormFooter />
        </form>
    );
};

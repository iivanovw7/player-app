/**
 * Module contains login form.
 * @module src/features/Login/ui/Form/Form
 */
import { Button, type InputProps, useLocale } from '@/shared';

import { messages } from '../../lib';
import { useLoginState } from '../../model';
import { FormField } from '../FormField';
import { FormFooter } from '../FormFooter';

import { styles } from './Form.css';

/**
 * Form component.
 * @method
 * @name src/features/Login/ui/Form/Form
 * @param {ProfileProps} props - contains component props.
 * @return {JSXElement} React component with children.
 * @constructor
 */
export const Form = () => {
    const { getText } = useLocale();
    const { actions, state } = useLoginState();

    const handleChange = (key): InputProps['onChange'] => (value: string) => {
        actions.setFormValue(key, value);
    };

    const handleFocusOut: InputProps['onFocusOut'] = () => {
        if (! state.validation.isEnabled) {
            actions.enableValidation();
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
                validate={state.validation.validateFormField('username')}
                label={getText(messages.formUsernamePlaceholder)}
                inputProps={{
                    autocomplete: 'username',
                    type: 'email',
                }}
                hasWarning={state.errors.username}
                onFocusOut={handleFocusOut}
                onChange={handleChange('username')}
            />
            <FormField
                value={state.form.password}
                validate={state.validation.validateFormField('password')}
                label={getText(messages.formPasswordPlaceholder)}
                inputProps={{
                    autocomplete: 'current-password',
                    type: 'password',
                }}
                hasWarning={state.errors.password}
                onFocusOut={handleFocusOut}
                onChange={handleChange('password')}
            />
            <Button
                class={styles.submit}
                textClass={styles.submitText}
                text={getText(messages.formSignIn)}
                isLoading={state.isLoading}
            />
            <FormFooter />
        </form>
    );
};

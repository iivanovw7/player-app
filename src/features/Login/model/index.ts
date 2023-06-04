/**
 * Module contains `Login` store model.
 * @module src/features/Login/model
 */
import type { AxiosError } from 'axios';

import type { TBasicApiResult } from '#/api/basic-api';
import type { ErrorData } from '@/shared';
import { authStore, ErrorCodeMap, getErrorCode, getLogger, makeApiRequest, noop2, withLocalStore } from '@/shared';

import { validateFormField } from '../lib/validation';

type Validation = {
    isEnabled: boolean;
    validateFormField: typeof validateFormField;
};

export type LoginForm = {
    password: string;
    username: string;
};

export type LoginFormErrors = Record<keyof LoginForm, boolean>;

export type LoginState = {
    errors: LoginFormErrors;
    form: LoginForm;
    isLoading: boolean;
    validation: Validation;
};

export type LoginActions = {
    enableValidation: () => void;
    setFormValue: <Key extends keyof LoginForm>(
        key: Key,
        value: LoginForm[Key]
    ) => void;
    submitForm: () => Promise<void>;
};

type CreateLoginStore = {
    actions: LoginActions;
    state: LoginState
};

const logger = getLogger('Login store');

const EMPTY_FORM: LoginForm = {
    password: '',
    username: ''
};

const INITIAL_FORM_ERRORS: LoginFormErrors = {
    password: false,
    username: false
};

/**
 *  Login store constructor.
 *  @return {Store} returns store instance.
 */
export const createLoginStore = (): CreateLoginStore => {
    const [state, setState] = createStore<LoginState>({
        errors: INITIAL_FORM_ERRORS,
        form: EMPTY_FORM,
        isLoading: false,
        validation: {
            isEnabled: false,
            validateFormField: noop2,
        }
    });

    const setLoading = (isLoading: boolean) => {
        setState({
            isLoading
        });
    };

    const setFormError = (key: keyof LoginForm) => {
        setState({
            errors: {
                ...INITIAL_FORM_ERRORS,
                [key]: true
            }
        });
    };

    const resetFormErrors = () => {
        setState({
            errors: INITIAL_FORM_ERRORS
        });
    };

    const actions: LoginActions = {
        enableValidation: () => {
            setState({
                validation: {
                    isEnabled: true,
                    validateFormField
                }
            });
        },
        setFormValue: (key, value) => {
            setState(produce((s) => {
                s.form[key] = value;
            }));
        },
        submitForm: async () => {
            await makeApiRequest({
                onRequestError: (error) => {
                    const data = (error as AxiosError<TBasicApiResult<null>>)?.response?.data;
                    const code = getErrorCode(data as ErrorData);

                    if (code === ErrorCodeMap.BASIC_API_NOT_FOUND) {
                        setFormError('username');
                    }

                    if (code === ErrorCodeMap.BASIC_API_FORBIDDEN) {
                        setFormError('password');
                    }

                    logger.error(data);
                },
                request: async () => {
                    // TODO: Block request if has validation errors
                    await authStore.actions.login({
                        password: state.form.password,
                        username: state.form.username,
                    });

                    resetFormErrors();
                },
                setLoading
            });
        }
    };

    return {
        actions,
        state
    };
};

export const [useLoginState, withLoginStore] = withLocalStore<CreateLoginStore>(
    createLoginStore
);

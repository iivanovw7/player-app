/**
 * Module contains `Login` validation helpers.
 * @module src/features/Login/lib/validation
 */

import type { AnySchema } from 'yup';

import type { LoginForm } from '@/features/Login/model';
import type { CurriedValidate } from '@/shared';
import { validateField, validateForm, VALIDATION_SCHEMAS, yup } from '@/shared';

type FormSchema = Record<keyof LoginForm, yup.AnySchema>;

export const formSchema = yup.object<FormSchema>({
    password: VALIDATION_SCHEMAS.STRING_LENGTH_BETWEEN(4, 60),
    username: VALIDATION_SCHEMAS.EMAIL_REQUIRED,
});

/**
 * Validate the login form.
 * @param {LoginForm} data - form data.
 * @return {{validatedData: LoginForm}} validated form data.
 */
export const validateFormData = (data: LoginForm) => {
    return validateForm(formSchema, data);
};

/**
 * Validate the login form field.
 * @param {'password' | 'username'} field - form field.
 * @return {Validate<'password' | 'username'>} validation function.
 */
export const validateFormField: CurriedValidate<keyof FormSchema> = (field) => (value) => {
    return validateField({
        schema: yup.reach(formSchema, field) as AnySchema,
        value,
    });
};

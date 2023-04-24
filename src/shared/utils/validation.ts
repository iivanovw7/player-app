/**
 * Module contains validation helpers.
 * @module shared/utils/validation
 */
import * as yup from 'yup';
import type { ValidateOptions, ValidationError, AnySchema } from 'yup';

export { yup };

export type CurriedValidate<T> = (
    parameter: T,
    options?: ValidateOptions<never>
) => (value: never) => FieldValidationResult;

export type ValidateFieldParams<Value = unknown, Context = AnyObject> = {
    options?: ValidateOptions<Context>;
    schema: AnySchema;
    value: Value;
};

/**
 * Validates single field with schema passed in parameters.
 *      Also accepts error handlers and loader in parameters.
 * @func validateField
 * @category Validation
 * @param {ValidateFieldParams} params - validation params.
 * @see {@link https://github.com/jquense/yup}
 * @return {string | null} validation error string or null.
 */
export const validateField = (params: ValidateFieldParams) => {
    const { schema, value, options } = params;

    try {
        schema.validateSync(value, options as ValidateOptions);
    }
    catch (error: unknown) {
        const { message } = error as ValidationError;

        return message;
    }

    return null;
};

/**
 * Validates form data, throws validation error is case validation was not passed successfully.
 * @func validateForm
 * @template FormData
 * @category Validation
 * @param {yup.AnySchema} schema - validation schema.
 * @see {@link https://github.com/jquense/yup}
 * @param {FormData} formData - object represents data to validate.
 * @param {ValidateOptions} options - validation options.
 * @return {string | null} validated data.
 */
export const validateForm = <FormData>(
    schema: yup.AnySchema,
    formData: FormData,
    options?: ValidateOptions<unknown>): {
    validatedData: FormData
} => ({
    validatedData: schema.validateSync(formData, options as ValidateOptions) as FormData,
});

/**
 * Verifies if error object represents validation error.
 * @func isValidationError
 * @param {unknown} error - error object.
 * @category Validation
 * @return {boolean} if error is validation error.
 */
export const isValidationError = (error: unknown): error is ValidationError => {
    return error instanceof yup.ValidationError;
};

export const VALIDATION_ERRORS = {
    EMPTY: 'Field is required',
    STRING: 'Field has to be a string',
} as const;

export const VALIDATION_SCHEMAS = {
    /**
     * Option string.
     * @type {yup.StringSchema}
     */
    STRING: yup.string().trim(),
    /**
     * Required string.
     * @type {yup.StringSchema}
     */
    STRING_REQUIRED: yup.string().trim().required(VALIDATION_ERRORS.EMPTY)
};


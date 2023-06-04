/**
 * Module contains useValidation hook.
 * @module src/shared/hooks/useValidation
 */
import type { Validate } from '../utils/validation';

export type UseValidationProps<Value> = {
    errorText?: string;
    hasError?: boolean;
    validate?: Validate<Value>;
    value?: Value;
};

export const useValidation = <Value>(params: UseValidationProps<Value>) => {
    const [validationError, setValidationError] = createSignal('');

    const hasValidationError = createSignal(params.validate
        ? !! validationError()
        : params.hasError);

    if (params.validate) {
        setValidationError(params.validate(params.value) || '');
    }
    else {
        setValidationError((params.hasError && params.errorText) || '');
    }

    return {
        hasValidationError,
        validationError,
    };
};

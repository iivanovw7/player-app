/**
 * Module contains login form field.
 * @module src/features/Login/ui/FormField/FormField
 */
import type { InputProps } from '@/shared';
import { Input } from '@/shared';

import { styles } from './FormField.css';

export type FormFieldProps = InputProps;

/**
 * FormField component.
 * @method
 * @name src/features/Login/ui/FormField
 * @param {ProfileProps} props - contains component props.
 * @return {JSXElement} React component with children.
 * @constructor
 */
export const FormField = (props: FormFieldProps) => {
    return (
        <div class={styles.formElement}>
            <Input
                classes={{
                    container: styles.container,
                    helper: styles.helper,
                    input: styles.input,
                    inputBox: styles.inputBox,
                    label: styles.label,
                }}
                label={props.label}
                value={props.value}
                validate={props.validate}
                hasWarning={props.hasWarning}
                onFocusOut={props.onFocusOut}
                onChange={props.onChange}
            />
        </div>
    );
};

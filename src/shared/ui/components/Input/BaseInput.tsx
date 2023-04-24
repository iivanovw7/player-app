/**
 * Module contains BaseInput component.
 * @module src/shared/ui/components/Input/BaseInput
 */

type InputPropKeys = 'type'
| 'id'
| 'name'
| 'title'
| 'autofocus'
| 'disabled'
| 'readonly'
| 'placeholder'
| 'onChange'
| 'onBlur'
| 'onKeyDown'
| 'onKeyUp'
| 'onKeyPress'
| 'onClick'
| 'class'
| 'maxLength'
| 'oninput';

export type BaseInputProps = Pick<JSX.HTMLElementTags['input'], InputPropKeys> & {
    hasError?: boolean;
    ref?: Accessor<HTMLInputElement | undefined>;
    selectOnFocus?: boolean;
    value?: Maybe<string | number>;
};

/**
 * Creates BaseInput component.
 * @name src/shared/ui/components/Input/BaseInput
 * @method
 * @param {BaseInputProps} props - contains component props.
 * @return {JSXElement} React component with children.
 * @constructor
 */
export const BaseInput = (props: BaseInputProps) => (
    <input
        {...props}
        class={props.class}
        data-error={props.hasError}
        ref={props.ref}
        value={props.value ?? ''}
    />
);


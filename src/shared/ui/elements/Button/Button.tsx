/**
 * Module contains plain button component.
 * @module src/shared/ui/elements/Button/Button
 */

import { Icon, type IconProps } from '../Icon';

type ButtonAttributes = 'type'
| 'id'
| 'name'
| 'title'
| 'style'
| 'onMouseEnter'
| 'onMouseLeave'
| 'onKeyDown';

export type ButtonProps = {
    children?: JSXElement[] | JSXElement;
    class?: string;
    customIcon?: JSXElement;
    dataId?: string | number;
    disabled?: boolean;
    icon?: IconProps;
    iconClass?: string;
    isLoading?: boolean;
    onClick?: (eventData: MouseEvent) => void;
    setRef?: Accessor<Maybe<HTMLButtonElement>>,
    style?: JSX.CSSProperties;
    text?: JSXElement,
    textClass?: string;
    /** @default 'button' */
    type?: 'button' | 'submit' | 'reset';
} & Pick<JSX.HTMLElementTags['button'], ButtonAttributes>;

/**
 * Creates `Button` component.
 * @constructor
 * @name src/shared/ui/elements/Button
 * @method
 * @param {ButtonProps} props - contains component props.
 * @return {JSXElement} React component with children.
 */
export const Button = (props: ButtonProps) => {
    /**
     *  If button has text.
     *  @return {boolean} hasText flag.
     */
    const hasText = () => Boolean(props.text) || props.text === 0;

    return (
        <button
            ref={props.setRef}
            class={props.class}
            data-id={props.dataId}
            disabled={props.disabled}
            id={props.id}
            name={props.name}
            title={props.title}
            type={props.type}
            style={props.style}
            onClick={(eventData) => props.onClick?.(eventData)}
        >
            {props.children}
            {hasText() && (
                <div class={props.textClass}>
                    {props.text}
                </div>
            )}
            {props?.customIcon || (props.icon && <Icon {...props.icon} />)}
        </button>
    );
};

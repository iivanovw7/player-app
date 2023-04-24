/**
 * Module contains `Link` and `LinkButton` elements.
 * @module src/shared/ui/components/Link/Link
 */
import { Icon, type IconProps } from '../Icon';
import { Img, type ImgProps } from '../Img';

export type LinkProps = {
    children?: JSXElement[] | JSXElement;
    class?: string;
    dataActive?: boolean;
    /** @default "false" */
    disabled?: boolean;
    icon?: IconProps,
    image?: ImgProps;
    onKeyDown?: (eventData: KeyboardEvent) => void;
    setRef?: Accessor<HTMLAnchorElement | undefined>;
    style?: JSX.CSSProperties;
    target?: '_self' | '_blank' | '_parent' | '_top';
    text?: JSXElement;
    textClass?: string;
} & Pick<JSX.HTMLElementTags['a'], 'download' | 'href' | 'title' | 'tabIndex'>;

/**
 * Creates `Link` component.
 * @name src/shared/ui/components/Link
 * @method
 * @param {LinkProps} props - contains component props.
 * @return {JSXElement} React component with children.
 * @constructor
 */
export const Link = (props: LinkProps) => (
    <a
        class={props.class}
        ref={props.setRef}
        href={props.href}
        data-active={props.dataActive || false}
        data-disabled={props.disabled || false}
        title={props.title}
        download={props.download}
        tabIndex={props.tabIndex}
        style={props.style}
        onKeyDown={(e) => props.onKeyDown?.(e)}
    >
        {props.text && (
            <span class={props.textClass}>
                {props.text}
            </span>
        )}
        {props.icon && <Icon {...props.icon} />}
        {props.image && <Img {...props.image} />}
        {props.children}
    </a>
);

export type LinkButtonProps = Omit<LinkProps, 'tag' | 'href' | 'ref' | 'download'> & {
    onClick?: (eventData: Event) => void;
    setRef?: HTMLButtonElement;
};

/**
 * Creates `LinkButton` component.
 * @name src/shared/ui/components/Link/LinkButton
 * @method
 * @param {LinkButtonProps} props - contains component props.
 * @return {JSXElement} component with children.
 * @constructor
 */
export const LinkButton = (props: LinkButtonProps) => (
    <button
        class={props.class}
        ref={props.setRef}
        data-active={props.dataActive || false}
        data-disabled={props.disabled || false}
        title={props.title}
        tabIndex={props.tabIndex}
        onClick={(e) => props.onClick?.(e)}
        onKeyDown={(e) => props.onKeyDown?.(e)}
    >
        {props.text && (
            <span class={props.textClass}>
                {props.text}
            </span>
        )}
        {props.icon && <Icon {...props.icon} />}
        {props.image && <Img {...props.image} />}
        {props.children}
    </button>
);


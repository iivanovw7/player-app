/**
 * Module contains `NavLink` element.
 * @module src/shared/ui/components/NavLink/NavLink
 */
import { A, useMatch } from '@solidjs/router';

export type NavLinkProps = {
    class?: string;
    disabled?: boolean;
    href: string;
    ref?: Accessor<HTMLAnchorElement | undefined>;
    replace?: boolean;
    style?: JSX.CSSProperties;
    text: string;
    textClass?: string;
};

/**
 * Creates `NavLink` component.
 * @constructor
 * @method
 * @name src/shared/ui/components/NavLink/NavLink
 * @param {object} props - contains component props.
 * @return {JSXElement} component with children.
 */
export const NavLink = (props: NavLinkProps) => {
    /**
     * Path matcher
     * @param {string} path - path to be matched with.
     * @return {Accessor<PathMatch | undefined>} router match result.
     */
    const match = (path: string) => useMatch(() => path)();

    return (
        <Show when={! props.disabled} fallback={<NavLink.DisabledLink {...props} />}>
            <A
                ref={props.ref}
                class={props.class}
                href={props.href}
                data-active={!! match(props.href)}
                data-disabled={props.disabled}
                style={props.style}
            >
                <span class={props.textClass}>
                    {props.text}
                </span>
            </A>
        </Show>
    );
};

NavLink.DisabledLink = (props: NavLinkProps) => (
    <div
        class={props.class}
        data-active={false}
        data-disabled={props.disabled}
        style={props.style}
    >
        <span class={props.textClass}>
            {props.text}
        </span>
    </div>
);

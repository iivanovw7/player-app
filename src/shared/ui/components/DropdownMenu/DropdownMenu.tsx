/**
 * Module contains DropdownMenu element.
 * @module src/shared/ui/components/DropdownMenu/DropdownMenu
 */

import {
    flip,
    offset,
    shift,
    arrow,
    autoUpdate,
    type Strategy,
    type Placement,
} from '@floating-ui/dom';
import { useFloating, type UseFloatingResult } from 'solid-floating-ui';
import { useElementHover } from 'solidjs-use';

import { capitalize, EventMap, offEvent, onEvent, env, noop } from '../../../utils';
import { Button } from '../Button';

import { ARROW_SIZE, ItemType, StaticSide, CLOSE_DELAY } from './constants';
import { MenuItems, type TMenuItem } from './ui';

export type DropdownMenuRef = {
    close: () => void;
    isOpen: boolean;
    open: () => void;
};

export type DropdownMenuProps = {
    children?: JSXElement[] | JSXElement;
    classes: {
        arrowFloating?: string,
        arrowToggle?: string,
        item?: string;
        items?: string;
        menu?: string;
        toggle?: string;
    },
    items: TMenuItem[];
    offset?: {
        alignmentAxis?: Pixels;
        mainAxis?: Pixels;
    },
    onClick?: () => void;
    onClose?: () => void;
    /** @default 'bottom' */
    placement?: Placement;
    /** @default 'absolute' */
    strategy?: Strategy;
    withArrowFloating?: boolean;
    withArrowToggle?: boolean;
};

export type TDropdownMenu = DropdownMenuProps & DropdownMenuRef & {
    ItemType: typeof ItemType;
    StaticSides: typeof StaticSide;
};

const {
    POINTERMOVE,
    KEYDOWN
} = EventMap;

/**
 * Creates `DropdownMenu` component.
 * @constructor
 * @name src/shared/ui/components/DropdownMenu/DropdownMenu
 * @method
 * @param {object} props - contains component props.
 * @return {JSXElement} React component with children.
 */
export const DropdownMenu = (props: DropdownMenuProps) => {
    const [toggleRef, setToggleRef] = createSignal<HTMLButtonElement>();
    const [floatingRef, setFloatingRef] = createSignal<HTMLDivElement>();
    const [arrowRef, setArrowRef] = createSignal<HTMLSpanElement>();

    const [isOpen, setIsOpen] = createSignal(false);

    const [position, setPosition] = createSignal<UseFloatingResult>({
        middlewareData: {},
        placement: 'bottom-start',
        strategy: 'absolute',
        update: noop,
        x: null,
        y: null,
    });

    const isToggleHovered = useElementHover(toggleRef, {
        delayEnter: 200,
        delayLeave: CLOSE_DELAY
    });

    const isFloatingHovered = useElementHover(floatingRef, {
        delayEnter: 0,
        delayLeave: CLOSE_DELAY
    });

    // eslint-disable-next-line require-jsdoc
    const handlePointerMove = ({ pointerType }: PointerEvent) => {
        if (pointerType === 'mouse') {
            // setAllowHover(true);
        }
    };

    // eslint-disable-next-line require-jsdoc
    const handleKeyDown = () => {
        // setAllowHover(false);
    };

    onMount(() => {
        onEvent(window, KEYDOWN, handleKeyDown, true);
        onEvent(window, POINTERMOVE, handlePointerMove as unknown as EventListener, {
            capture: true,
            once: true,
        });
    });

    onCleanup(() => {
        offEvent(window, KEYDOWN, handleKeyDown, true);
        offEvent(window, POINTERMOVE, handlePointerMove as unknown as EventListener, {
            capture: true
        });
    });

    createEffect(() => {
        setIsOpen(isToggleHovered() || isFloatingHovered());
    });

    createEffect(() => {
        setPosition(useFloating(toggleRef, floatingRef, {
            middleware: [
                offset(props.offset),
                flip(),
                shift(),
                arrow({
                    element: arrowRef()!
                })
            ],
            placement: props.placement,
            strategy: props.strategy,
            whileElementsMounted: autoUpdate,
        }));
    });

    /**
     *  Floating side getter.
     *  @return {string} side name
     */
    const side = () => props.placement?.split('-')[0];

    /**
     *  Floating static side getter.
     *  @return {StaticSide} static side name
     */
    const staticSide = () => StaticSide[side() as StaticSide];

    return (
        <div>
            <Button
                setRef={setToggleRef}
                class={props.classes.toggle}
                onClick={(eventData) => {
                    eventData.stopPropagation();
                    props.onClick?.();
                }}
            >
                {props.children}
                <Show when={props.withArrowToggle}>
                    <span
                        class={props.classes.arrowToggle}
                        style={{
                            ...(isOpen() && {
                                transform: 'rotate(180deg)'
                            })
                        }}
                    />
                </Show>
            </Button>
            <Portal mount={env.portal}>
                <Show when={isOpen()}>
                    <div
                        ref={setFloatingRef}
                        class={props.classes.menu}
                        style={{
                            left: `${String(position().x ?? 0)}px`,
                            position: position().strategy,
                            top: `${String(position().y ?? 0)}px`,
                        }}
                    >
                        <MenuItems
                            class={props.classes.items}
                            items={props.items}
                            menuItemClass={props.classes.item}
                            style={{
                                ...(staticSide() && {
                                    [`padding${capitalize(staticSide())}`]: props.withArrowFloating
                                        ? ARROW_SIZE
                                        : 0
                                })
                            }}
                        />
                        <Show when={props.withArrowFloating}>
                            <span
                                id="floating-arrow"
                                ref={setArrowRef}
                                class={props.classes.arrowFloating}
                                style={{
                                    bottom: '0px',
                                    height: `${ARROW_SIZE}px`,
                                    left: `${position().middlewareData.arrow?.x || 0}px`,
                                    right: '0px',
                                    top: `${position().middlewareData.arrow?.y || 0}px`,
                                    width: `${ARROW_SIZE}px`,
                                    ...(staticSide() && {
                                        [staticSide()]: `-${ARROW_SIZE / 2}px`
                                    })
                                }}
                            />
                        </Show>
                    </div>
                </Show>
            </Portal>
        </div>
    );
};

DropdownMenu.ItemType = ItemType;
DropdownMenu.StaticSides = StaticSide;

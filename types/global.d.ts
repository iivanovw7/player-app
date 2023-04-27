/*
    eslint-disable
    spaced-comment,
    @typescript-eslint/ban-types,
    @typescript-eslint/no-explicit-any,
    @typescript-eslint/prefer-function-type,
    @typescript-eslint/no-empty-interface,
    @typescript-eslint/no-magic-numbers
*/

type WidenLiteral<T> = T extends string
    ? string
    : T extends number
        ? number
        : T extends boolean
            ? boolean
            : T extends bigint
                ? bigint
                : T extends symbol
                    ? symbol
                    : T;


declare global {
    namespace JSX {}

    interface IGlobalStore {}

    interface ImportMetaEnv {
        readonly TMDB_TOKEN: string
    }

    interface ImportMeta {
        readonly env: ImportMetaEnv
    }

    type RunningMode = 'development' | 'test' | 'production' | 'analyze';

    type JSX = {};

    type Pixels = number;

    type Milliseconds = number;

    /** Represents type of optional object. */
    type Maybe<T> = T | undefined | null;

    export type MaybeAccessor<T> = T | Accessor<T>;

    export type MaybeElement = HTMLElement | SVGElement | undefined | null;

    export type MaybeElementAccessor<T extends MaybeElement = MaybeElement> = MaybeAccessor<T>;

    /** Represents type of `nullable` object. */
    type Nullable<T> = T | null;

    type ErrorMessage = string;

    type Voidable<T> = T | void | undefined;

    type UnwrapPromise<T extends Promise<any>> = T extends Promise<infer Data> ? Data : never;

    type ConfigurableWindow = {
        window?: Window
    };

    export type AnyStore = { actions: object, state: object };

    /** Represents any function. */
    type AnyFunction = (...args: any[]) => any;

    type AsyncReturnType<T extends (...args: any[]) => Promise<any>> = UnwrapPromise<ReturnType<T>>;

    type Optional<T extends object, K extends keyof T = keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

    type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;

    type Constructor<T = any> = new (...args: any[]) => T;

    type AugmentedRequired<T extends object, K extends keyof T = keyof T> = Omit<T, K> & Required<Pick<T, K>>;

    /** Represents any object object. */
    type AnyObject<T = any> = {
        [field: string]: T;
    };

    /** Gets property type. */
    type PropType<TObj, TProp extends keyof TObj> = TObj[TProp];

    /** Represents type of object with partial and `nullable` fields. */
    type PartialAndNullable<T> = {
        [P in keyof T]?: T[P] | null;
    };

    type ObjectOrNull<T = unknown> = Nullable<AnyObject<T>>;

    type OptionalObject<T = unknown> = Maybe<ObjectOrNull<T>>;

    /** Object containing promise. */
    type WithPromise<T = unknown> = {
        promise: Promise<T>;
    };

    type ValueOf<T> = T[keyof T];

    type ExtractType<T, U extends T> = T extends U ? T : never;

    type DotPrefix<T extends string> = T extends '' ? '' : `.${T}`;

    type DotNestedKeys<T> = (
        T extends object
            ? { [K in Exclude<keyof T, symbol>]: `${K}${DotPrefix<DotNestedKeys<T[K]>>}` }[Exclude<keyof T, symbol>]
            : ''
    ) extends infer D ? Extract<D, string> : never;

    type FalsyJSX = false | null | undefined | '' | 0;

    type MappableItems<T extends AnyObject> = ReadonlyArray<FalsyJSX | (T & { key?: Key })>;

    type FieldValidationResult = Maybe<ErrorMessage>;

    type Mutable<T> = {
        -readonly [P in keyof T]: T[P] extends ReadonlyArray<infer U>
            ? Mutable<U>[]
            : Mutable<T[P]>;
    };

    type Body = {
        json(): Promise<unknown>;
    };

    type JSON = {
        parse(
            text: string,
            reviver?: (this: any, key: string, value: any) => any
        ): unknown
    };

    type ArrayConstructor = {
        isArray(arg: any): arg is unknown[]
    };

    type ReadonlyArray<T> = {
        includes(
            searchElement: T | (WidenLiteral<T> & {}),
            fromIndex?: number,
        ): boolean;
    };

    type Array<T> = {
        includes(
            searchElement: T | (WidenLiteral<T> & {}),
            fromIndex?: number,
        ): boolean;
    };
}

export {};

/*
    eslint-enable
    spaced-comment,
    @typescript-eslint/ban-types,
    @typescript-eslint/no-explicit-any,
    @typescript-eslint/prefer-function-type,
    @typescript-eslint/no-empty-interface,
    @typescript-eslint/no-magic-numbers
*/

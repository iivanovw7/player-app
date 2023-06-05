/**
 * Module contains useLocale hook.
 * @module src/shared/hooks/useLocale
 */
import { useIntl, type MessageDescriptor } from '@cookbook/solid-intl';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type MessageValues = Record<string, PrimitiveType | FormatXMLElementFn<string, string>>;

export type GetText = {
    <T extends MessageDescriptor>(messageDescriptor: T, values?: Maybe<MessageValues>, fallback?: string): string;
    <T extends JSXElement>(notMessageDescriptor: T, values?: Maybe<MessageValues>, fallback?: string): T;
};

// eslint-disable-next-line require-jsdoc
export const useLocale = () => {
    const { formatMessage } = useIntl();

    // eslint-disable-next-line require-jsdoc
    const getText: GetText = <Key extends JSXElement | MessageDescriptor>(
        maybeMessageDescriptor: Key,
        values?: Maybe<MessageValues>
    ) => {
        return ((maybeMessageDescriptor as MessageDescriptor)?.id
            ? formatMessage(maybeMessageDescriptor as MessageDescriptor, values)
            : maybeMessageDescriptor) as string;
    };

    return { getText };
};

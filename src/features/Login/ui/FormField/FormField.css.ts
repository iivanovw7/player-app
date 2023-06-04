/**
 * Module login FormField styles.
 * @module src/features/Login/ui/FormField/FormField.css.ts
 */
import { style } from '@vanilla-extract/css';

import { inputStyles } from '@/shared/ui/styles';

const container = style([
    inputStyles.container,
]);

const input = style([
    inputStyles.input({
        fluid: true
    }),
]);

const inputBox = style([
    inputStyles.inputBox,
]);

const formElement = style({
    paddingBottom: 16,
    position: 'relative'
});

const label = style([
    inputStyles.label
]);

const helper = style([
    inputStyles.helper
]);

export const styles = {
    container,
    formElement,
    helper,
    input,
    inputBox,
    label,
};

/**
 * Module contains header menu utils.
 * @module src/widgets/WaitScreen/lib
 */

import { defaultTo } from 'ramda';

import placeholder from '../../../../assets/img/avatar-placeholder.png?w=32&png&imagetools';

export const withAvatarPlaceholder = defaultTo(placeholder);

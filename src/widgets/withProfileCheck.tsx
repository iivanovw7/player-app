/**
 * Module contains profile check HOC.
 * @module src/widgets/Profiles/withProfileCheck
 */
import { Profiles } from '@/features';
import { profilesStore } from '@/shared';

/**
 * User profile check HOC.
 * @constructor
 * @param {Component} Cmp - represents child component.
 * @return {Component} component with children.
 */
export const withProfileCheck = (Cmp: Component) => (props) => (
    <Show when={!! profilesStore.state.active} fallback={<Profiles />}>
        <Cmp {...props} />
    </Show>
);

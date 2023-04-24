/**
 * Module contains application `withRouter` HOC.
 * @module src/app/providers/withRouter
 */

import { Router } from '@solidjs/router';

/**
 * Application router HOC.
 * @constructor
 * @param {Component} Cmp - represents child component.
 * @return {Component} component with children.
 */
export const withRouter = (Cmp: Component) => (props) => (
    <Router>
        <Cmp {...props} />
    </Router>
);

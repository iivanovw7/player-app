/**
 * Module contains useBreakpoints hook.
 * @module src/shared/hooks/useBreakpoints
 */
import { useMediaQuery } from 'solidjs-use';

import { BREAKPOINTS, screenSizes } from '../ui/styles';

/* eslint-disable sort-keys */

type TDirectionString = 'Up' | 'Down';
type TBreakpoint = typeof BREAKPOINTS[number];

type TDirectionResult<Breakpoints extends Array<TBreakpoint>, Direction extends TDirectionString> = {
    [Breakpoint in Breakpoints[number] as `${Breakpoint}${Direction}`]: Accessor<boolean>;
};

export type TUseBreakPointsResult<T extends Array<TBreakpoint>> = TDirectionResult<T, 'Down'>
& TDirectionResult<T, 'Up'>;

type BreakpointsMap = TUseBreakPointsResult<Array<TBreakpoint>>;
type MatchRule = keyof BreakpointsMap;

/**
 * Represents map of breakpoint matches for different directions..
 * @readonly
 * @type {Object.<module:src/shared/hooks/useBreakpoints.BREAKPOINTS, { down: MatchRule; up: MatchRule; }>}
 */
const breakpointMatchesMap: Record<TBreakpoint, { down: MatchRule; up: MatchRule; }> = {
    xs: { down: 'xsDown', up: 'xsUp' },
    sm: { down: 'smDown', up: 'smUp' },
    md: { down: 'mdDown', up: 'mdUp' },
    lg: { down: 'lgDown', up: 'lgUp' },
    xl: { down: 'xlDown', up: 'xlUp' },
    xxl: { down: 'xxlDown', up: 'xxlUp' },
};

/**
 * Returns map of conditions corresponding received list of breakpoints.
 * @name src/shared/hooks/useBreakpoints
 * @see {@link https://developer.mozilla.org/en-US/docs/web/api/window/matchmedia matchmedia}
 * @function
 * @category hooks
 * @return {TUseBreakPointsResult<Array<TBreakpoint>>}
 *      object, containing breakpoint conditions for different change directions.
 */
export const useBreakpoints = (): TUseBreakPointsResult<Array<TBreakpoint>> => {
    return BREAKPOINTS.reduce((acc, breakpoint) => {
        const { down, up } = breakpointMatchesMap[breakpoint];

        acc[up] = useMediaQuery(`(min-width: ${screenSizes[`width-${breakpoint}`]})`);
        acc[down] = useMediaQuery(`(max-width: ${screenSizes[`width-${breakpoint}`]})`);

        return acc;
    }, {} as TUseBreakPointsResult<Array<TBreakpoint>>);
};

/* eslint-enable sort-keys */

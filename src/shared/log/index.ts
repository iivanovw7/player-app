/**
 * Module contains application logger public API.
 * @module src/shared/log
 */
import { getLogger, LogLevel, setLogLevel } from './logger';

setLogLevel(LogLevel.DEBUG);

export { getLogger, setLogLevel, LogLevel };

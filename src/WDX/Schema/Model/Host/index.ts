
/**
 * Elrest eDesign Runtime Library Messages Model Host
 * 
 * @copyright 2024 Elrest AutomationsSysteme GMBH
 */

'use strict';

/**
 * eDesign Runtime Host Monitor
 * 
 */
export class HostMonitor {
	constructor(
		public cpu: number,
		public memory: number
	) { }
}

/**
 * eDesign Runtime Host Monitor
 * 
 */
export class HostLog {
	constructor(
		public message: string
	) { }
}

/**
 * eDesign Runtime Host Status
 * 
 * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/readyState
 */
export enum HostStatus {
	CONNECTING = 'CONNECTING',
	OPEN = 'OPEN',
	CLOSING = 'CLOSING',
	CLOSED = 'CLOSED'
}

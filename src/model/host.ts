
/**
 * Elrest eDesign Runtime Library Messages Model Host
 * 
 * @copyright 2023 Elrest AutomationsSysteme GMBH
 */

`use strict`;


/**
 * Elrest eDesign Runtime Library Messages Model Host Import
 * 
 * @copyright 2023 Elrest AutomationsSysteme GMBH
 */
import { Configuration, Instance } from "./instance";
import { Device } from "./device";
import { Package } from "./package";
import { Data } from "./data";
import { DataSchema } from "./data";
import { Repository } from "./repository";




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
	CONNECTING = "CONNECTING",
	OPEN = "OPEN",
	CLOSING = "CLOSING",
	CLOSED = "CLOSED"
}

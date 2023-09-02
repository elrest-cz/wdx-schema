/**
 * Elrest eDesign Runtime Library Messages Model Runtime
 * 
 * @copyright 2023 Elrest AutomationsSysteme GMBH
 */

'use strict';

import { Instance } from "./instance";
import { Device } from "./device";
import { HostLog, HostMonitor } from "./host";
import { Data } from "./data";
import { DataSchema } from "./data";
import { Package } from "./package";
import { Repository } from "./repository";

/**
 * eDesign Runtime Host Protocol
 * 
 * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/protocol
 */
export enum ClientProtocol {
	ws = "ws",
	wss = "wss"
}

/**
 * eDesign Runtime Host Client Configuration
 * 
 * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/protocol
 */
export class ClientConfiguration {

	constructor(
		public protocol: ClientProtocol,
		public host: string,
		public port: number
	) { }
}


export class Runtime {

	constructor(

		public title: string,

		/**
		 * eDesign Runtime Host Client
		 */
		public clientConfiguration: ClientConfiguration,

		/**
		 * eDesign Runtime Host Connections
		 */
		public connections: Instance[] = [],

		/**
		 * eDesign Runtime Host Data
		 */
		public data: Data[] = [],

		/**
		 * eDesign Runtime Host Logs
		 */
		public logs: HostLog[] = [],

		/**
		 * eDesign Runtime Host Packages
		 */
		public packages: Package[] = [],

		/**
		 * eDesign Runtime Host Monitoring
		 */
		public monitor: HostMonitor[] = [],

		/**
		 * eDesign Runtime Host Monitoring
		 */
		public scripts: HostMonitor[] = [],


		/**
		 * eDesign Runtime Host Repositories
		 */
		public repositories: Repository[] = []
	) { }

}

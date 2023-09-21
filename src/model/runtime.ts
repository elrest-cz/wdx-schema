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
import { Directory } from "./filesystem";

/**
 * eDesign Runtime Library Messages Model Runtime Host Protocol
 * 
 * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/protocol
 */
export enum ClientProtocol {
	ws = "ws",
	wss = "wss"
}

/**
 * eDesign Runtime Library Messages Model Runtime Host Client Configuration
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


export class SystemCpuTimes {

	constructor(
		/**
		 * user <number> The number of milliseconds the CPU has spent in user mode.
		 */
		public user: number,

		/**
		 * nice <number> The number of milliseconds the CPU has spent in nice mode.
		 */
		public nice: number,

		/**
		 * sys <number> The number of milliseconds the CPU has spent in sys mode.
		 */
		public sys: number,

		/**
		 * idle <number> The number of milliseconds the CPU has spent in idle mode.
		 */
		public idle: number,

		/**
		 * irq <number> The number of milliseconds the CPU has spent in irq mode.
		 */
		public irq: number

	) {

	}
}

export class SystemCpu {

	constructor(

		/**
		 * model <string>
		 */
		public model: string,

		/**
		 * speed <number> (in MHz)
		 */
		public speed: number,
		/**
		 * speed <number> (in MHz)
		 */
		public times: SystemCpuTimes,

	) { }

}

export class System {
	constructor(
		public memoryFree: number,
		public memoryTotal: number,
		public cpu: Array<SystemCpu>,
	) { }
}

export class Runtime {

	constructor(

		/**
		 * eDesign Runtime Title
		 */
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
		 * eDesign Runtime Host Packages
		 */
		public packages: Package[] = [],

		/**
		 * eDesign Runtime Host Monitoring
		 */
		public scripts: Directory = new Directory("", ""),

		/**
		 * eDesign Runtime Host Repositories
		 */
		public repositories: Repository[] = [],

		/**
		 * eDesign Runtime System
		 */
		public system: System|null = null

	) { }

}

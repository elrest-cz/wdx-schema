/**
 * Elrest eDesign Runtime IPC Typescript Model Runtime System Cpu Times
 * 
 * @copyright 2024 Elrest Automations Systeme GMBH
 * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/protocol
 */

'use strict';

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
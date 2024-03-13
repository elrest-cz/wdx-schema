/**
 * Elrest eDesign Runtime IPC Typescript Model Runtime System Cpu
 * 
 * @copyright 2024 Elrest Automations Systeme GMBH
 * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/protocol
 */

'use strict';

import { SystemCpuTimes } from './SystemCpuTimes';


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
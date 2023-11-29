/**
 * Elrest eDesign Runtime IPC Typescript Model Runtime System
 * 
 * @copyright 2023 Elrest Automations Systeme GMBH
 * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/protocol
 */

'use strict';

import { SystemCpu } from './SystemCpu';

export class System {
	constructor(
		public memoryFree: number | null = null,
		public memoryTotal: number | null = null,
		public cpu: Array<SystemCpu> = [],
	) { }
}
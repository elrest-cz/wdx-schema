/**
 * Elrest eDesign Runtime IPC Typescript Model Instance Monitor
 * 
 * @copyright 2023 Elrest Automations Systeme GMBH
 */
'use strict';

import { Instance } from './Instance';
import { System } from './../Runtime';

export class Monitor {
	constructor(
		public system: System,
		public instances?: Array<Instance>
	) { }
}
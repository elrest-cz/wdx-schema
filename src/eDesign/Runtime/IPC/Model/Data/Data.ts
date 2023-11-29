/**
 * Elrest eDesign Runtime IPC Typescript Model Data
 * 
 * @copyright 2023 Elrest Automations Systeme GMBH
 */
'use strict';

import { DataType } from './DataType';

export class Data {
	constructor(
		public path: string,
		public value: any,
		public type?: DataType
	) {
	}
}
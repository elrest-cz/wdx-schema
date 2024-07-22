/**
 * Elrest eDesign Runtime IPC Typescript Model Data Value
 * 
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import { DataType } from './DataType';

export class DataValue {
	constructor(
		public path: string,
		public value: any,
		public type?: DataType
	) {
	}
}
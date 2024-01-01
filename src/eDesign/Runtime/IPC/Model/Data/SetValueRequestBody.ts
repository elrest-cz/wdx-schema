/**
 * Elrest eDesign Runtime IPC Typescript Model Data Set Value Request Body
 * 
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import { Data } from './Data';

export class SetValueRequestBody {

	constructor(
		public path: string,
		public value: Data
	) {
	}
}
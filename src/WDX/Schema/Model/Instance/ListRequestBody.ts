/**
 * Elrest eDesign Runtime IPC Typescript Model Instance List Request Body
 * 
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import { Status } from './Status';

export class ListRequestBody {

	constructor(

		public status: Status = Status.Any,

		public namespace: string = '',
	) {
	}
}
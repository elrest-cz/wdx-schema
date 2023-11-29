/**
 * Elrest eDesign Runtime IPC Typescript Model Repository List Request Body
 * 
 * @copyright 2023 Elrest Automations Systeme GMBH
 */

'use strict';

import { Status } from '../Package';

export class ListRequestBody {

	constructor(
		public status: Status = Status.Any
	) {
	}
}

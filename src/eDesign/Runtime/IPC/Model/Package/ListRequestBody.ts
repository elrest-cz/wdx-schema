/**
 * Elrest eDesign Runtime IPC Typescript Model Package ListRequestBody
 * 
 * @copyright 2023 Elrest AutomationsSysteme GMBH
 */

'use strict';

import { Status } from './Status';

export class ListRequestBody {

	constructor(

		public status: Status = Status.Available

	) {
	}
}
/**
 * Elrest eDesign Runtime Library Messages Models
 * 
 * @copyright 2023 Elrest AutomationsSysteme GMBH
 */
'use strict';

import {
	Package,
	Status
} from "./package";


export class InfoRequestBody {
	constructor(public name: string, public version?: string) {
	}
}

export class ListRequestBody {

	constructor(public status: Status = Status.Any) {
	}
}

export class Repository {
	constructor(
		public id: number,
		public name: string,
		public url: string,
		public packages: Array<Package>
	) { };
}
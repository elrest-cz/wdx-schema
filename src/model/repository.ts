'use strict';

import { Package, Status } from "./package";


export class ListRequestBody {

	constructor(public status: Status = Status.Any) {
	}
}

export class Repository {

	constructor(
		public id: number,
		public name: string,
		public url: string,
		public packages: Array<Package>) { };
}
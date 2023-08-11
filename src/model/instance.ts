'use strict';

export class ListRequestBody {

	public status: Status;

	constructor(status: Status) {
		this.status = status;
	}
}

export enum Status {
	Online = "online",
	Offline = "offline",
	Any = "any"
}

export class Monit {

	constructor(
		public memory: number,
		public cpu: number
	) { }
}

export class Instance {

	constructor(

		public pid: number,
		public name: string,
		public pm2_env: any,
		public pm_id: number,
		public status: Status,
		public monit: Monit
	) { }

}
'use strict';
// import * as PM2LIB from 'pm2';

export class Configuration {
	
}

export class ConfigurationLogs {

}

export class MetaData extends Map<string,any>{}

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

export class Log {
	
}

export class Instance {

	public logs:any;

	constructor(
		public id: number,
		public pid: number,
		public name: string,
		public namespace: string,
		public mode: string,
		public pm2_env: any,
		public status: Status,
		public monit: Monit,

	) { }

}
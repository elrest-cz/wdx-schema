'use strict';
// import * as PM2LIB from 'pm2';

export class Configuration {
	cwd?: string;
}

export class ConfigurationLogs {

}

export class MetaData extends Map<string, any>{ }

export class InfoRequestBody {

	constructor(public id: number) {
	}
}

export class ListRequestBody {

	constructor(public status: Status) {
	}
}

export enum Status {
	Online = "online",
	Offline = "stopped",
	Error = "errored",
	Any = "any"
}
/**
 * 
 */
export class Monit {

	constructor(
		public memory: number,
		public cpu: number
	) { }
}

export class Log {

}

export class Instance {
	constructor(
		public pm_id?: number | undefined,
		public pid?: number | undefined,
		public name?: string | undefined,
		public namespace?: string | undefined,
		public mode?: string | undefined,
		public pm2_env?: any | undefined,
		public status?: Status | undefined,
		public monit?: Monit | undefined,
		public uptime?:number
	) { }

}


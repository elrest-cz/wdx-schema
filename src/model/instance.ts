/**
 * Elrest eDesign Runtime Library Messages Model Instance
 * 
 * @copyright 2023 Elrest AutomationsSysteme GMBH
 */
'use strict';

export class Configuration {
	directory?: string;
}

export class ConfigurationLogs {

}

export class InfoRequestBody {

	constructor(public id: number) {
	}
}

export class ListRequestBody {

	constructor(
		public status: Status,
		public namespace: string = ''
	) {
	}
}

export enum ExecutionMode {

	fork_mode = "fork_mode",

	cluster = "cluster"
}

export enum Status {
	Online = "online",
	Offline = "stopped",
	Error = "errored",
	Any = ""
}

export class Monit {
	constructor(
		public memory: number,
		public cpu: number
	) { }
}

export class Log {

}

export const InstanceInterpreterNone = "none";

export class InstanceArgs {
	[name: string]: string;
}

export class InstanceLogging {
	constructor(
		public outFile: string,
		public errorFile: string,

	) {

	}
}

export class Instance {

	public interpeter: string = InstanceInterpreterNone;
	public script: string;
	public directory: string;
	public args: InstanceArgs = new InstanceArgs();
	public watch: boolean | Array<string> = false;
	public max_restarts: number = 1;

	constructor(
		public pm_id: number,
		public pid: number,
		public name: string,
		public namespace: string,
		public mode: string,
		public pm2_env: any,
		public status?: Status | undefined,
		public monit?: Monit | undefined,
		public uptime?: number
	) { }

}


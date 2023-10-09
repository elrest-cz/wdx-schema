/**
 * Elrest eDesign Runtime Library Messages Model Instance
 * 
 * @copyright 2023 Elrest AutomationsSysteme GMBH
 */
'use strict';

import { System } from "./runtime";

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

	fork = "fork",

	cluster = "cluster"
}

export enum Status {
	Online = "online",
	Starting = "starting",
	Stopping = "stopping",
	Offline = "stopped",
	Error = "errored",
	Any = ""
}

export class Monitor {
	constructor(
		public system: System,
		public instances?: Array<Instance>
	) { }
}

export class Monit {
	constructor(
		public memory: number,
		public cpu: number
	) { }
}

export const INTERPRETER_NONE = "none";

export class InstanceMonitor {

}

export class Logs {
	constructor(
		public info: Array<string> = [],
		public error: Array<string> = []
	) { }
}

/**
 * Elrest eDesign Runtime Library Messages Model Instance
 * 
 * @see https://pm2.keymetrics.io/docs/usage/pm2-api/
 * 
 * Attributes available
 * Application behavior and configuration can be fine-tuned with the following attributes:
 */

export class Instance {

	public logs: Logs = new Logs;

	constructor(

		/**
		 * Runtime Process ID
		 */
		public pm_id?: number,

		/**
		 * Process ID
		 */
		public pid?: number,

		/**
		 * General
		 */
		/**
		 * name(string)	“my-api”	application name(default to script filename without extension)
		 */
		public name?: string,

		/**
		 * namespace(string)	“scripts”	application namespaces
		 */
		public namespace?: string,

		/**
		 * namespace(string)	“scripts”	application namespaces
		 */
		public mode?: ExecutionMode,

		/**
		 * pm2_env(object)
		 */
		public pm2_env?: any,

		/**
		 * pm2_env(object)
		 */
		public status?: Status,

		/**
		 * monit(Monit)
		 */
		public monit?: Monit,

		/**
		 * script(string)	”./api/app.js”	script path relative to pm2 start
		 */
		public script?: string,

		/**
		 * cwd(string)	“/var/www /”	the directory from which your app will be launched
		 */
		public cwd?: string,

		/**
		 * args(string)	“-a 13 - b 12”	string containing all arguments passed via CLI to script
		 */
		public args?: string,

		/**
		 * interpreter(string)	“/usr/bin / python”	interpreter absolute path(default to node)
		 */
		public interpreter: string = "node",

		/**
		 * node_args(string)	 	alias to interpreter_args
		 */
		public node_args?: string,

		/**
		 * Advanced features
		 */
		/**
		 *instances	number	-1	number of app instance to be launched
		 */
		public instances?: number,

		/**
		 *exec_mode	string	“cluster”	mode to start your app, can be “cluster” or “fork”, default fork
		 */
		public exec_mode?: ExecutionMode,

		/**
		 *watch	boolean or []	true	enable watch & restart feature, if a file change in the folder or subfolder, your app will get reloaded
		 */
		public watch?: boolean | Array<string>,


		/**
		 *ignore_watch	list	[”[\/\\]\./”, “node_modules”]	list of regex to ignore some file or folder names by the watch feature
		 */
		public ignore_watch?: Array<string>,


		/**
		 * max_memory_restart	string	“150M”	your app will be restarted if it exceeds the amount of memory specified. human-friendly format : it can be “10M”, “100K”, “2G” and so on…
		 */
		public max_memory_restart?: string,


		/**
		 * env	object	{“NODE_ENV”: “development”, “ID”: “42”}	env variables which will appear in your app
		 */
		public env: any = {},


		/**
		 * env_	object	{“NODE_ENV”: “production”, “ID”: “89”}	inject when doing pm2 restart app.yml --env
		 */
		public env_: any = {},


		/**
		 * source_map_support	boolean	true	default to true, [enable/disable source map file]
		 */
		public source_map_support: boolean = true,


		/**
		 * instance_var	string	“NODE_APP_INSTANCE”	see documentation
		 */
		public instance_var: string = "NODE_APP_INSTANCE",


		/**
		 * filter_env	array of string	[ “REACT_” ]	Excludes global variables starting with “REACT_” and will not allow their penetration into the cluster.
		 */
		public filter_env: Array<string> = [],

		/**Log files*/

		/**
		 * log_date_format	(string)	“YYYY-MM-DD HH:mm Z”	log date format (see log section)
		 */
		public log_date_format: string = "DD/MM/YYYY HH:mm:ss",

		/**
		 * error_file	(string)	 	error file path (default to $HOME/.pm2/logs/<app name>-error-<pid>.log)
		 */
		public error_file?: string,

		/**
		 * out_file	(string)	 	output file path (default to $HOME/.pm2/logs/<app name>-out-<pid>.log)
		 */
		public out_file?: string,

		/**
		 * log_file	(string)	 	file path for both output and error logs (disabled by default)
		 */
		public log_file?: string,

		/**
		 * combine_logs	boolean	true	if set to true, avoid to suffix logs file with the process id
		 */
		public combine_logs: boolean = true,

		/**
		 * merge_logs	boolean	true	alias to combine_logs
		 */
		public merge_logs: boolean = true,

		/**
		 * pid_file	(string)	 	pid file path (default to $HOME/.pm2/pids/<app name>-<pid>.pid)
		 */
		public pid_file?: string,

		/**Control flow */

		/*
		min_uptime	(string)	 	min uptime of the app to be considered started
		listen_timeout	number	8000	time in ms before forcing a reload if app not listening
		kill_timeout	number	1600	time in milliseconds before sending a final SIGKILL
		shutdown_with_message	boolean	false	shutdown an application with process.send(‘shutdown’) instead of process.kill(pid, SIGINT)
		wait_ready	boolean	false	Instead of reload waiting for listen event, wait for process.send(‘ready’)
		max_restarts	number	10	number of consecutive unstable restarts (less than 1sec interval or custom time via min_uptime) before your app is considered errored and stop being restarted
		restart_delay	number	4000	time to wait before restarting a crashed app (in milliseconds). defaults to 0.
		autorestart	boolean	false	true by default. if false, PM2 will not restart your app if it crashes or ends peacefully
		*/

		/**
		 * cron_restart	string	“1 0 * * *”	a cron pattern to restart your app. Application must be running for cron feature to work
		 */
		public cron_restart?: string,

		/*
		vizion	boolean	false	true by default. if false, PM2 will start without vizion features (versioning control metadata)
		post_update	list	[“npm install”, “echo launching the app”]	a list of commands which will be executed after you perform a Pull/Upgrade operation from Keymetrics dashboard
		force	boolean	true	defaults to false. if true, you can start the same script several times which is usually not allowed by PM2
		*/
		/**
		 * Deployment
		 
		key	SSH key path	String	$HOME/.ssh
		user	SSH user	String
		host	SSH host	[String]
		ssh_options	SSH options with no command-line flag, see ‘man ssh’	String or [String]
		ref	GIT remote/branch	String
		repo	GIT remote	String
		path	path in the server	String
		pre-setup	Pre-setup command or path to a script on your local machine	String	
		post-setup	Post-setup commands or path to a script on the host machine	String
		pre-deploy-local	pre-deploy action	String	 
		post-deploy	post-deploy action	String
		*/
	) { }

}
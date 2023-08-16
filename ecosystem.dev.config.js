module.exports = {
	apps: [

		/**
		 * eDesign Runtime Messages
		 */
		{
			name: "messages-build",

			namespace: "build",
			
			instance_var: "@elrest/edesign-runtime-messages",

			cwd: "./messages",

			script: "tsc",

			args: [
				"--build",
				"--verbose",
				"--watch",
				//"--generateCpuProfile tsc-output.cpuprofile",
				//"--diagnostics",
				//"--extendedDiagnostics",
				//"--listEmittedFiles",
				//"--traceResolution"
			].join(" "),

			autorestart: true,

			max_restarts: 1,

			watch: false,

			ignore_watch: [
				"build",
				"logs",
				"node_modules"
			],

			interpreter: "none",

			out_file: 'logs/out.log',
			error_file: 'logs/error.log',
			log_file: 'logs/log.log',
			merge_logs: true,

			log_date_format: 'DD/MM/YYYY HH:mm:ss'
			//			log_date_format	(string)	“YYYY-MM-DD HH:mm Z”	log date format (see log section)
			//			error_file	(string)	 	error file path (default to $HOME/.pm2/logs/<app name>-error-<pid>.log)
			//			out_file	(string)	 	output file path (default to $HOME/.pm2/logs/<app name>-out-<pid>.log)
			//			log_file	(string)	 	file path for both output and error logs (disabled by default)
			//			combine_logs	boolean	true	if set to true, avoid to suffix logs file with the process id
			//			merge_logs	boolean	true	alias to combine_logs
			//			time	boolean	false	false by default. If true auto prefixes logs with Date
			//			pid_file	(string)	 	pid file path (default to $HOME/.pm2/pids/<app name>-<pid>.pid)
		},

	].concat(
	)
}
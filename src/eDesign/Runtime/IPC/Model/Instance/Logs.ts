/**
 * Elrest eDesign Runtime IPC Typescript Model Instance Logs
 * 
 * @copyright 2023 Elrest AutomationsSysteme GMBH
 */
'use strict';

export class Logs {
	constructor(
		public info: Array<string> = [],
		public error: Array<string> = []
	) { }
}
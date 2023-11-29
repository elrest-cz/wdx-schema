/**
 * Elrest eDesign Runtime IPC Typescript Model Data Register Request Body
 * 
 * @copyright 2023 Elrest Automations Systeme GMBH
 */
'use strict';

export class RegisterRequestBody {
	constructor(
		public path: string,
		public refreshMin?: number,
		public refreshMax?: number,
		public delta?: number
	) { }
}

/**
 * Elrest eDesign Runtime IPC Typescript Messages Error
 * 
 * @copyright 2024 Elrest AutomationsSysteme GMBH
 */
'use strict';

export class MessageError {
	constructor(
		public code: number,
		public message: string
	) {
	}
}

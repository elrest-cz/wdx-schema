/**
 * Elrest eDesign Runtime IPC Typescript Model Data Get Schema Request Body
 * 
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

export class GetSchemaRequestBody {

	public static UNLIMITED_LEVEL: number = 1;

	constructor(
		public path: string,
		public level: number = GetSchemaRequestBody.UNLIMITED_LEVEL
	) {
	}
}

/**
 * Elrest eDesign Runtime IPC Typescript Model Data Register Provider Request Body
 * 
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import { DataSchema } from './../../Model/Data/DataSchema';


export class RegisterProviderRequestBody {

	constructor(

		public providerName: string,

		public schema: DataSchema
	) { }
}

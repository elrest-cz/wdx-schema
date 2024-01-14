/**
 * Elrest eDesign Runtime IPC Typescript Model Data Schema
 * 
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import { v4 as uuidv4 } from 'uuid';
import { Data } from './Data';
import { DataSchemaMetadata } from './MetaData/DataSchemaMetadata';

export class DataSchema {

	public createdTimestamp: number = (new Date()).getTime();

	public updateTimestamp: number = (new Date()).getTime();

	constructor(
		public path: string = '',
		public relativePath: string = '',
		public name: string = '',
		public children?: Array<DataSchema> | undefined,
		public metadata: DataSchemaMetadata = new DataSchemaMetadata,
		public readonly: boolean = false,
		public subscribeable: boolean = false,
		public editable: boolean = false,
		public extendable?: boolean,
		public removable?: boolean,
		public valueSnapshot?: Data,
		public uuid: string = uuidv4()
	) {
	}
}
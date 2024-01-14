/**
 * Elrest eDesign Runtime IPC Typescript Model Data Schema Metadata eWeb
 * 
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import { DataSchemaMetadata } from './DataSchemaMetadata';



export class DataSchemaMetadataEWebVariableType {

}

export class DataSchemaMetadataEWebProvider extends DataSchemaMetadata {
	public type: {
		label: 'type',
		type: DataSchemaMetadataEWebVariableType,
	};
}

export class DataSchemaMetadataEWebVariable extends DataSchemaMetadata {
	public type: {
		label: 'type',
		type: DataSchemaMetadataEWebVariableType,
	};
}

/**
 * Elrest eDesign Runtime IPC Typescript Model Data Schema Metadata
 * 
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import { DataSchemaMetadata } from './DataSchemaMetadata';

export enum DataSchemaMetadataMODBUSType {

}

export class DataSchemaMetadataMODBUS extends DataSchemaMetadata {
	public addressFrom: string;
	public type: DataSchemaMetadataMODBUSType;
}

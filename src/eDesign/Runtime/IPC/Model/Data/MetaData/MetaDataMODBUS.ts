/**
 * Elrest eDesign Runtime IPC Typescript Model Data Schema Metadata
 * 
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import { AbstractMetaData } from './AbstractMetaData';
import { MetaDataType } from './MetaDataType';

export enum MetadataMODBUSType {

}

export class MetaDataMODBUS extends AbstractMetaData {

	public type: MetaDataType = MetaDataType.MODBUS;

	public addressFrom: {
		label: 'address-from',
		type: string,
	};
}

/**
 * Elrest eDesign Runtime IPC Typescript Model Data Schema MetaData MODBUS
 * 
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import { MetaDataStore } from './MetaDataStore';
import { MetaDataType } from './MetaDataType';

export enum MetadataMODBUSType {

}

export class MetaDataMODBUS extends MetaDataStore {

	public type: MetaDataType = MetaDataType.MODBUS;

	public addressFrom: {
		label: 'address-from',
		type: string,
	};

	public format: {
		label: 'format',
		type: string,
	};
}

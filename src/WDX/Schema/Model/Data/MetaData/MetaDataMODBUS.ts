/**
 * Elrest eDesign Runtime IPC Typescript Model Data Schema MetaData MODBUS
 * 
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import { MetadataMODBUSAccess } from './MetadataMODBUSAccess';
import { MetaDataStore } from './MetaDataStore';
import { MetaDataType } from './MetaDataType';
import { MetadataMODBUSType } from './MetadataMODBUSType';

export class MetaDataMODBUS extends MetaDataStore {

	public type: MetaDataType = MetaDataType.MODBUS;

	/**
	 * Decimal number 
	 */
	public MODBUSAddressFrom: number;

	public MODBUSType: MetadataMODBUSType;

	public MODBUSAccess: Array<MetadataMODBUSAccess> = new Array<MetadataMODBUSAccess>;

	public MODBUSAddressLength: number;

}

/**
 * Elrest eDesign Runtime IPC Typescript Model Data Schema MetaData MODBUS Adapter
 * 
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import { MetaDataStore } from './MetaDataStore';
import { MetaDataType } from './MetaDataType';

export class MetadataMODBUSAdapter extends MetaDataStore {

	public type: MetaDataType = MetaDataType.MODBUS_ADAPTER;

	public MODBUSPort: number;

}

/**
 * Elrest eDesign Runtime IPC Typescript Model Data Schema MetaData MODBUS Adapter
 * 
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import { MetaDataAbstractAdapter } from './MetaDataAbstractAdapter';
import { MetaDataType } from './MetaDataType';

export class MetadataMODBUSAdapter extends MetaDataAbstractAdapter {

	public type: MetaDataType = MetaDataType.MODBUS_ADAPTER;

	public MODBUSPort: number;

}

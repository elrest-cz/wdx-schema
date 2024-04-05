/**
 * Elrest eDesign Runtime IPC Typescript Model Data Schema MetaData MODBUS Adapter
 * 
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import { MetaDataAbstractProvider } from './MetaDataAbstractProvider';
import { MetaDataType } from './MetaDataType';

export class MetaDataMODBUSProvider extends MetaDataAbstractProvider {

	public type: MetaDataType = MetaDataType.MODBUS_PROVIDER;

	public providedType: MetaDataType = MetaDataType.MODBUS_ADAPTER;

	public providerBasePath: string = 'modbus';

}

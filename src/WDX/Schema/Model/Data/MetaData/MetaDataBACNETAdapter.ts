/**
 * Elrest eDesign Runtime IPC Typescript Model Data Schema Metadata BACNET
 * 
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import { BACNetOptions } from '../../Instance/DataAdapter';
import { MetaDataAbstractAdapter } from './MetaDataAbstractAdapter';
import { MetaDataType } from './MetaDataType';

export class MetaDataBACNETAdapter extends MetaDataAbstractAdapter {

	public type: MetaDataType = MetaDataType.BACNET_ADAPTER;

	public bacnetOptions:BACNetOptions;
}

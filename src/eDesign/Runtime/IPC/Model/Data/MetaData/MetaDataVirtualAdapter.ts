/**
 * Elrest eDesign Runtime IPC Typescript Model Data Schema MetaData Virtual Adapter 
 * 
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import { MetaDataAbstractAdapter } from './MetaDataAbstractAdapter';
import { MetaDataType } from './MetaDataType';

export class MetaDataVirtualAdapter extends MetaDataAbstractAdapter {

	public type: MetaDataType = MetaDataType.VIRTUAL_ADAPTER;

	public id?: number;

	public parentId?: number;
}

/**
 * Elrest eDesign Runtime IPC Typescript Model Data Schema MetaData Virtual Adapter 
 * 
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import { AbstractMetaData } from './AbstractMetaData';
import { MetaDataType } from './MetaDataType';

export class MetaDataVirtualProvider extends AbstractMetaData {

	public type: MetaDataType = MetaDataType.VIRTUAL_PROVIDER;

	public id?: number;

	public parentId?: number;
}

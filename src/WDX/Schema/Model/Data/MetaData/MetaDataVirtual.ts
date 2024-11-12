/**
 * Elrest eDesign Runtime IPC Typescript Model Data Schema Metadata Virtual
 * 
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import { MetaDataStore } from './MetaDataStore';
import { MetaDataType } from './MetaDataType';

export class MetaDataVirtual extends MetaDataStore {

	public type: MetaDataType = MetaDataType.VIRTUAL;

	declare public id?: number;

	declare public parentId?: number;
}

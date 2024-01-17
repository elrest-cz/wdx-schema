/**
 * Elrest eDesign Runtime IPC Typescript Model Data Schema Metadata Virtual
 * 
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import { AbstractMetaData } from './AbstractMetaData';
import { MetaDataType } from './MetaDataType';

export class MetaDataVirtual extends AbstractMetaData {
	public type: MetaDataType = MetaDataType.VIRTUAL;
}

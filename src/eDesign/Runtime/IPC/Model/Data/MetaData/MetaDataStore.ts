/**
 * Elrest eDesign Runtime IPC Typescript Model Data Schema Metadata
 * 
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import { AbstractMetaData } from './AbstractMetaData';
import { MetaDataType } from './MetaDataType';

/**
 * Key/Value pairs of any adapter data schema specific names and it's values
 */
export class MetaDataStore extends AbstractMetaData {

	public type: MetaDataType = MetaDataType.ANY;

	public id?: number;

	public parentId?: number;
}

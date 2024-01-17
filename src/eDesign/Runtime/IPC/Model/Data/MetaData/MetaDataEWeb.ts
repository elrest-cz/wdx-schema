/**
 * Elrest eDesign Runtime IPC Typescript Model Data Schema Metadata eWeb
 * 
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import { AbstractMetaData } from './AbstractMetaData';
import { MetaDataType } from './MetaDataType';

export class MetaDataEWeb extends AbstractMetaData {
	public type: MetaDataType = MetaDataType.EWEB;
}

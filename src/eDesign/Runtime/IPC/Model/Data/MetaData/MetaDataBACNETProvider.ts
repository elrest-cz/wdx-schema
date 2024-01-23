/**
 * Elrest eDesign Runtime IPC Typescript Model Data Schema Metadata BACNET
 * 
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import { AbstractMetaData } from './AbstractMetaData';
import { MetaDataType } from './MetaDataType';

export class MetaDataBACNETProvider extends AbstractMetaData {
	public type: MetaDataType = MetaDataType.BACNET_PROVIDER;
}

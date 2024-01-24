/**
 * Elrest eDesign Runtime IPC Typescript Model Data Schema Metadata BACNET
 * 
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import { MetaDataAbstractProvider } from './MetaDataAbstractProvider';
import { MetaDataType } from './MetaDataType';

export class MetaDataBACNETProvider extends MetaDataAbstractProvider {
	public type: MetaDataType = MetaDataType.BACNET_PROVIDER;
	
}

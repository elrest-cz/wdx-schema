/**
 * Elrest eDesign Runtime IPC Typescript Model Data Schema MetaData Virtual Provider
 * 
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import { MetaDataAbstractProvider } from './MetaDataAbstractProvider';
import { MetaDataType } from './MetaDataType';

export class MetaDataVirtualProvider extends MetaDataAbstractProvider {

	public type: MetaDataType = MetaDataType.VIRTUAL_PROVIDER;

	public providedType: MetaDataType = MetaDataType.VIRTUAL_ADAPTER;

}

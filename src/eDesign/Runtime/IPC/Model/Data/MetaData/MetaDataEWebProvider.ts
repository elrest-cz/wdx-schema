/**
 * Elrest eDesign Runtime IPC Typescript Model Data Schema Metadata eWeb
 * 
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import { MetaDataAbstractProvider } from './MetaDataAbstractProvider';
import { MetaDataType } from './MetaDataType';

export class MetaDataEWebProvider extends MetaDataAbstractProvider {

	public type: MetaDataType = MetaDataType.EWEB_PROVIDER;

	public providedType: MetaDataType = MetaDataType.EWEB_ADAPTER;

}

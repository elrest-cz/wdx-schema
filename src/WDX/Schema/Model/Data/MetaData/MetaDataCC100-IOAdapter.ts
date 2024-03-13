/**
 * Elrest eDesign Runtime IPC Typescript Model Data Schema MetaData CC100IO Adapter
 * 
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import { MetaDataAbstractAdapter } from './MetaDataAbstractAdapter';
import { MetaDataType } from './MetaDataType';

export class MetaDataCC100IOAdapter extends MetaDataAbstractAdapter {

	public type: MetaDataType = MetaDataType.CC100IO_ADAPTER;

}
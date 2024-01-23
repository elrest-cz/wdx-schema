/**
 * Elrest eDesign Runtime IPC Typescript Model Data Schema MetaData CC100IO Adapter
 * 
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import { AbstractMetaData } from './AbstractMetaData';
import { MetaDataType } from './MetaDataType';

export class MetaDataCC100IOProvider extends AbstractMetaData {

	public type: MetaDataType = MetaDataType.CC100IO_PROVIDER;

}
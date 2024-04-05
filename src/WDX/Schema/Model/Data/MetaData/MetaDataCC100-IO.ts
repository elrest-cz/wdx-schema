/**
 * Elrest eDesign Runtime IPC Typescript Model Data Schema MetaData MODBUS
 * 
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import { AbstractMetaData } from './AbstractMetaData';
import { MetaDataCC100IOType } from './MetaDataCC100-IOType';
import { MetaDataType } from './MetaDataType';


export class MetaDataCC100IO extends AbstractMetaData {

	public type: MetaDataType = MetaDataType.CC100IO;

	constructor(

		public CC100IOType: MetaDataCC100IOType,

		public CC100IOIndex: number,
	) {
		super();
	}
}

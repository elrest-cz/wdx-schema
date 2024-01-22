/**
 * Elrest eDesign Runtime IPC Typescript Model Data Schema MetaData MODBUS
 * 
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import { AbstractMetaData } from './AbstractMetaData';
import { MetaDataType } from './MetaDataType';

export class MetaDataCC100IOAdapter extends AbstractMetaData {

	public type: MetaDataType = MetaDataType.CC100IO;
}

export enum MetaDataCC100IOType {

	/**
	 * Digital Input
	 */
	DI = 'DI',

	/**
	 * Digital Output
	 */
	DO = 'DO',

	/**
	 * Analog Input
	 */
	AI = 'AI',

	/**
	 * Analog Output
	 */
	AO = 'AO',
}

export class MetaDataCC100IO extends AbstractMetaData {

	public type: MetaDataType = MetaDataType.CC100IO;

	public CC100IOType: MetaDataCC100IOType;

	public CC100IOIndex: number;
}

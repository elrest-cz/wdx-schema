/**
 * Elrest eDesign Runtime IPC Typescript Model Data Schema MetaData OPCUA
 * 
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import { AbstractMetaData } from './AbstractMetaData';
import { MetaDataType } from './MetaDataType';


export class MetaDataOPCUA extends AbstractMetaData {

	public type: MetaDataType = MetaDataType.OPCUA;

	constructor(
		public nodeId:string,
		public nodeClass:number,
		
	) {
		super();
	}
}

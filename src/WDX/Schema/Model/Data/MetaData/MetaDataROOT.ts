/**
 * Elrest eDesign Runtime IPC Typescript Model Data Schema MetaData Root
 * 
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import { AbstractMetaData } from './AbstractMetaData';
import { MetaDataType } from './MetaDataType';

export class MetaDataROOT extends AbstractMetaData {

	public type: MetaDataType = MetaDataType.ROOT;

}

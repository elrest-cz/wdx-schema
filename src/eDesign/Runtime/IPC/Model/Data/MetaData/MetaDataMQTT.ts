/**
 * Elrest eDesign Runtime IPC Typescript Model Data Schema MetaData MQTT
 * 
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import { MetaDataStore } from './MetaDataStore';
import { MetaDataType } from './MetaDataType';

export class MetaDataMQTT extends MetaDataStore {

	public type: MetaDataType = MetaDataType.MQTT;
}

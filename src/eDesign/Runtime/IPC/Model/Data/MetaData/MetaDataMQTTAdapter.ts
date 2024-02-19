/**
 * Elrest eDesign Runtime IPC Typescript Model Data Schema MetaData MQTT Adapter
 * 
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import { MetaDataAbstractAdapter } from './MetaDataAbstractAdapter';
import { MetaDataType } from './MetaDataType';

export class MetaDataMQTTAdapter extends MetaDataAbstractAdapter {

	public type: MetaDataType = MetaDataType.MQTT_ADAPTER;

	public MQTTPOrt: number;

	public MQTTHost: string;

	public MQTTPath?: string;
}

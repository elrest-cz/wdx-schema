/**
 * Elrest eDesign Runtime IPC Typescript Model Data Schema MetaData MQTT Adapter
 * 
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import { MetaDataAbstractAdapter } from './MetaDataAbstractAdapter';
import { MetaDataMQTTProtocol } from './MetaDataMQTTProtocol';
import { MetaDataType } from './MetaDataType';


export class MetaDataMQTTAdapter extends MetaDataAbstractAdapter {

	public type: MetaDataType = MetaDataType.MQTT_ADAPTER;

	public MQTTProtocol: MetaDataMQTTProtocol;

	public MQTTPort: number;

	public MQTTHost: string;

	public MQTTPath?: string;

	public MQTTKeepalive?: number;

	public MQQTProtocolId?: string;

	public MQQTReconnectPeriod?: number;

	public MQQTConnectTimeout?: number;

	public MQQTClientId?: string;

	public MQQTUsername?: string;

	public MQQTPassword?: string;
}

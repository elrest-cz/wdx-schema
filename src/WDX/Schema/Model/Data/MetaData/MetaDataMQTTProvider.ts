/**
 * Elrest eDesign Runtime IPC Typescript Model Data Schema MetaData MQTT Adapter
 * 
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import { AbstractMetaData } from './AbstractMetaData';
import { MetaDataType } from './MetaDataType';

export class MetaDataMQTTProvider extends AbstractMetaData {

	public type: MetaDataType = MetaDataType.MQTT_PROVIDER;

	public providedType: MetaDataType = MetaDataType.MQTT_ADAPTER;

	public providerBasePath: string = 'mqtt';

}
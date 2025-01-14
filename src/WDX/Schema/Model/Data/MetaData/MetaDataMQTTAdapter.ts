/**
 * Elrest eDesign Runtime IPC Typescript Model Data Schema MetaData MQTT Adapter
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import {MQTTOptions} from '../../Instance/DataAdapter';
import {MetaDataAbstractAdapter} from './MetaDataAbstractAdapter';
import {MetaDataType} from './MetaDataType';


export class MetaDataMQTTAdapter extends MetaDataAbstractAdapter {
  public type: MetaDataType = MetaDataType.MQTT_ADAPTER;
  public mqttOptions: MQTTOptions;
}

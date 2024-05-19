/**
 * Elrest eDesign Runtime Library Messages Model Instance Application Module
 * MQTT Application
 *
 * @copyright 2024 Elrest AutomationsSysteme GMBH
 */
'use strict';

import {Type} from '../Type';
import {Instance} from '../Instance';
import {MQTTOptions} from './MQTTOptions';

export class MQTTDataAdapterInstance extends Instance {
  public code: string = Type.MQTTDataAdapter;
  public namespace: string = Type.MODBUSDataAdapter;
  public mqttOptions: MQTTOptions = new MQTTOptions();
}
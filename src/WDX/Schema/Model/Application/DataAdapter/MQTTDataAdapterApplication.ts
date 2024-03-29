/**
 * Elrest eDesign Runtime Library Messages Model Instance Application Module
 * MQTT Application
 *
 * @copyright 2024 Elrest AutomationsSysteme GMBH
 */
'use strict';

import {Type} from '../Type';
import {AbstractApplication} from '../AbstractApplication';

export class MQTTDataAdapterApplication extends AbstractApplication {
  public code: string = Type.DataApplication;

  public mqttOptions: {
    protocol?: string;

    port?: number;

    host?: string;

    path?: string;

    keepalive?: number;

    protocolId?: string;

    protocolVersion?: number;

    reconnectPeriod?: number;

    connectTimeout?: number;

    clientId?: string;

    username?: string;

    password?: string;
  };
}
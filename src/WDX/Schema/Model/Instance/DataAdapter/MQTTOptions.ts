/**
 * Elrest eDesign Runtime IPC Typescript Model Instance Execution Mode
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import { MQTTProtocol } from "./MQTTProtocol";


export class MQTTOptions {
  public protocol: MQTTProtocol = MQTTProtocol.ws;

  public port?: number = 1883;

  public host?: string;

  public path?: string;

  public keepalive?: number;

  public protocolId?: string;

  public protocolVersion?: number;

  public reconnectPeriod?: number;

  public connectTimeout?: number;

  public clientId?: string;

  public username?: string;

  public password?: string;
}
/**
 * Elrest eDesign Runtime IPC Typescript Model Instance Execution Mode
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

export class MQTTOptions {
  constructor(

      public protocol?: string,

      public port?: number,

      public host?: string,

      public path?: string,

      public keepalive?: number,

      public protocolId?: string,

      public protocolVersion?: number,

      public reconnectPeriod?: number,

      public connectTimeout?: number,

      public clientId?: string,

      public username?: string,

      public password?: string,
  ) {}
}
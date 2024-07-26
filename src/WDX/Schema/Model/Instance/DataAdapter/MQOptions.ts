/**
 * Elrest eDesign Runtime IPC Typescript Model Instance Execution Mode
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import {MQProtocol} from './MQProtocol';

export class MQOptions {
  public protocol: MQProtocol = MQProtocol.amqp;
  public host: string = '127.0.0.1';
  public port?: number;
  public path?: string;
  public user?: string;
  public password?: string;
}
/**
 * Elrest eDesign Runtime IPC Typescript Model Instance Execution Mode
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import {WSProtocol} from '../WSProtocol';

export class eWebOptions {
  public protocol: WSProtocol = WSProtocol.ws;
  public host: string = '127.0.0.1';
  public port: number = 82;
  public path: string = 'ElrestWS50';
  public username: string = 'Administrator';
  public password: string = '';
  public reconnectTimeout: number = 10000;
}
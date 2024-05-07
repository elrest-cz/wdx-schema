/**
 * Elrest eDesign Runtime IPC Typescript Model Instance Execution Mode
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import {WSProtocol} from '../WSProtocol';

export class eWebOptions {
  constructor(
      public protocol: WSProtocol = WSProtocol.ws,
      public host: string,
      public port: number,
      public path: string = 'ElrestWS50',
      public username: string,
      public password: string,
  ) {}
}
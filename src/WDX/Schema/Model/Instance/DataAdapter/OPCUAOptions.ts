/**
 * Elrest eDesign Runtime IPC Typescript Model Instance Execution Mode
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import {OPCUAProtocol} from './OPCUAProtocol';
export class OPCUAOptions {
  public protocol: OPCUAProtocol = OPCUAProtocol.opctcp;
  public host: string = '127.0.0.1';
  public port: number = 49947;
}
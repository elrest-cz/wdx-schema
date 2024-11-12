/**
 * Elrest eDesign Runtime IPC Typescript Model Instance
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict'

import{TCPOptions} from './TCPOptions';
import {UDPOptions} from './UDPOptions';

export class InstanceOrigin {
  public uuid: string = '';

  public code: string;

  public name?: string;

  public tcpOptions?: TCPOptions;

  public udpOptions?: UDPOptions;

  constructor() {}
}
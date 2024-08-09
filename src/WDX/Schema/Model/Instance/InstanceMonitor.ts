/**
 * Elrest eDesign Runtime IPC Typescript Model Instance
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict'

import{Status} from './Status';

export class InstanceMonitor {
  constructor(
      public uuid: string,
      public status: Status,
  ) {}
}
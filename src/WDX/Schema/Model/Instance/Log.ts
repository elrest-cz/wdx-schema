/**
 * Elrest eDesign Runtime IPC Typescript Model Instance
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict'

import{LogDate} from './LogDate';
import {LogLevel} from './LogLevel';
export class Log {
  constructor(
      public level: LogLevel,
      public date: LogDate,
      public channel: string,
      public title: string,
      public messsage: string|any,
      public instanceUuid: string = '',
  ) {}
}
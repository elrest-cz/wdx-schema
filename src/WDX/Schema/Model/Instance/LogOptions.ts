/**
 * Elrest eDesign Runtime IPC Typescript Model Instance Execution Mode
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import {LogLevel} from './LogLevel';

export class LogOptions {
  constructor(

      public level?: LogLevel,

      public channels?: Array<string>,

      public errorLogFile?: string,

      public outLogFile?: string,

      public mergeLog?: boolean,

      public mergeLogFile?: string,
  ) {}
}
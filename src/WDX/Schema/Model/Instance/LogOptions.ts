/**
 * Elrest eDesign Runtime IPC Typescript Model Instance Execution Mode
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

export class LogOptions {
  constructor(
      public errorLogFile?: string,

      public outLogFile?: string,

      public mergeLog?: boolean,

      public mergeLogFile?: string,
  ) {}
}
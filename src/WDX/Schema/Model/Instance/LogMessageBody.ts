/**
 * Elrest eDesign Runtime IPC Typescript Model Instance Execution Mode
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

export class LogMessageBody {
  constructor(

      public uuid: string,

      public logs: Array<string>,
  ) {}
}
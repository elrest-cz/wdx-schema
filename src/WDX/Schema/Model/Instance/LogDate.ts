/**
 * Elrest eDesign Runtime IPC Typescript Model Instance
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict'

export class LogDate {
  constructor(
      public timestamp: number,
      public date?: string,
      public time?: string,
      public timezone?: string,
  ) {}
}
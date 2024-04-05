/**
 * Elrest eDesign Runtime IPC Typescript Model Instance
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict'


export class RestartOptions {
  constructor(
      public autorestart?: boolean,
      public maxRestarts?: number,
      public restartCount?: number,
  ) {}
}
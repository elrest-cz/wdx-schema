/**
 * Elrest eDesign Runtime IPC Typescript Model Instance Execution Mode
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

export class BACNetOptions {
  constructor(
      public apduTimeout?: number,
      public listenAddress?: string,
      public broadcastAddress?: string,
  ) {}
}
/**
 * Elrest eDesign Runtime IPC Typescript Model Runtime
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */

'use strict';


export class CPU {
  constructor(
      public model: string,
      public speed: number,
      public user: number,
      public nice: number,
      public sys: number,
      public idle: number,
      public irq: number,

  ) {}
}

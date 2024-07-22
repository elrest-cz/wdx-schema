/**
 * Elrest eDesign Runtime IPC Typescript Model Instance
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict'


export class MemoryUsage {
  constructor(
      public rss: number,
      public heapTotal: number,
      public heapUsed: number,
      public external: number,
      public arrayBuffers: number,
  ) {}
}
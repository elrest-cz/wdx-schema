/**
 * Elrest eDesign Runtime IPC Typescript Model Instance
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict'


export class ResourceUsage {
  constructor(
      public free_memory: number,
      public total_memory: number,
      public rss: number,
      public available_memory: number,
      public userCpuSeconds: number,
      public kernelCpuSeconds: number,
      public cpuConsumptionPercent: number,
      public userCpuConsumptionPercent: number,
      public kernelCpuConsumptionPercent: number,
      public maxRss: number,
  ) {}
}
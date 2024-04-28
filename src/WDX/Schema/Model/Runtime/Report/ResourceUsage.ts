/**
 * Elrest eDesign Runtime IPC Typescript Model Runtime
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */

'use strict';


export class ResourceUsage {
  constructor(
      public rss: number,
      public free_memory: number,
      public total_memory: number,
      public available_memory: number,
      public maxRss: number,
      public constrained_memory: number,
      public userCpuSeconds: number,
      public kernelCpuSeconds: number,
      public cpuConsumptionPercent: number,
      public userCpuConsumptionPercent: number,
      public kernelCpuConsumptionPercent: number,
      public pageFaults: {
        IORequired: number,
        IONotRequired: number,
      },
      public fsActivity: {
        reads: number,
        writes: number,
      },
  ) {}
}

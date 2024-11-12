/**
 * Elrest eDesign Runtime IPC Typescript Model Runtime
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */

'use strict';


export class UvthreadResourceUsage {
  constructor(
      public userCpuSeconds: number,
      public kernelCpuSeconds: number,
      public cpuConsumptionPercent: number,
      public userCpuConsumptionPercent: number,
      public kernelCpuConsumptionPercent: number,
      public fsActivity: {
        reads: number,
        writes: number,
      },
  ) {}
}

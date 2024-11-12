/**
 * Elrest eDesign Runtime IPC Typescript Model Runtime
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */

'use strict';


export class JavascriptHeap {
  constructor(
      public totalMemory: number,
      public executableMemory: number,
      public totalCommittedMemory: number,
      public availableMemory: number,
      public totalGlobalHandlesMemory: number,
      public usedGlobalHandlesMemory: number,
      public usedMemory: number,
      public memoryLimit: number,
      public mallocedMemory: number,
      public externalMemory: number,
      public peakMallocedMemory: number,
      public nativeContextCount: number,
      public detachedContextCount: number,
      public doesZapGarbage: number,
      //@todo heapSpaces
  ) {}
}

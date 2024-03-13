/**
 * Elrest eDesign Runtime Library Messages Model Worker Module
 *
 * @copyright 2024 Elrest AutomationsSysteme GMBH
 */

import {ResourceLimits, SHARE_ENV, TransferListItem, WorkerOptions} from 'worker_threads';

export class WorkerOpts implements WorkerOptions {
  constructor(
      /**
       * List of arguments which would be stringified and appended to
       * `process.argv` in the worker. This is mostly similar to the
       * `workerData` but the values will be available on the global
       * `process.argv` as if they were passed as CLI options to the script.
       */
      public argv?: any[]|undefined,
      public env?: NodeJS.Dict<string>|typeof SHARE_ENV|undefined,
      //public eval?: boolean|undefined,
      public workerData?: any,
      public stdin?: boolean|undefined,
      public stdout?: boolean|undefined,
      public stderr?: boolean|undefined,
      public execArgv?: string[]|undefined,
      public resourceLimits?: ResourceLimits|undefined,
      /**
       * Additional data to send in the first worker message.
       */
      public transferList?: TransferListItem[]|undefined,
      /**
       * @default true
       */
      public trackUnmanagedFds?: boolean|undefined,
      /**
       * An optional `name` to be appended to the worker title
       * for debuggin/identification purposes, making the final title as
       * `[worker ${id}] ${name}`.
       */
      public name?: string|undefined,
  ) {}
}
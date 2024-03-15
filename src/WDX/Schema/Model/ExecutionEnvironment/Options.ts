/**
 * Elrest eDesign Runtime Library Messages Model Worker Module
 *
 * @copyright 2024 Elrest AutomationsSysteme GMBH
 */

import {SpawnOptions} from 'child_process';
import {WorkerOptions} from 'worker_threads';

export class Options {
  public spawn?:
      {command: string, args?: Array<string>, options?: SpawnOptions};

  public worker?: {script: string, options?: WorkerOptions};
}
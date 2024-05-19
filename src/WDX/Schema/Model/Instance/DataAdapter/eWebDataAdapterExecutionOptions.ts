/**
 * Elrest eDesign Runtime Library Messages Model Worker Module
 *
 * @copyright 2024 Elrest AutomationsSysteme GMBH
 */

import {SpawnOptions} from 'child_process';
import {WorkerOptions} from 'worker_threads';

import {ExecutionMode} from '../ExecutionMode';

export class eWebDataAdapterExecutionOptions {
  public mode: ExecutionMode = ExecutionMode.worker;
  public script: string = 'wdx-eweb';
  public options: SpawnOptions|WorkerOptions;
}
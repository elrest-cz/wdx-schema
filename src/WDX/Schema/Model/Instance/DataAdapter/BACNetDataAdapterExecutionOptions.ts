/**
 * Elrest eDesign Runtime Library Messages Model Worker Module
 *
 * @copyright 2024 Elrest AutomationsSysteme GMBH
 */

import {SpawnOptions} from 'child_process';
import {WorkerOptions} from 'worker_threads';

import {ExecutionMode} from '../ExecutionMode';

export class BACNetDataAdapterExecutionOptions {
  public mode: ExecutionMode = ExecutionMode.worker;
  public script: string = './node_modules/.bin/wdx-bacnet';
  public options: SpawnOptions|WorkerOptions;
}
/**
 * Elrest eDesign Runtime Library Messages Model Worker Module
 *
 * @copyright 2024 Elrest AutomationsSysteme GMBH
 */

import {SpawnOptions} from 'child_process';
import {ExecutionMode} from './ExecutionMode';
import { WorkerOptions } from 'worker_threads';

export class BPMNExecutionOptions {
  public mode: ExecutionMode = ExecutionMode.spawn;
  public script: string = './node_modules/.bin/wdx-bpmn';
  public options: SpawnOptions|WorkerOptions;
}
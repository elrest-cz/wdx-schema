/**
 * Elrest eDesign Runtime Library Messages Model Worker Module
 *
 * @copyright 2024 Elrest AutomationsSysteme GMBH
 */

import {SpawnOptions} from 'child_process';
import {WorkerOptions} from 'worker_threads';
import {ExecutionMode} from './ExecutionMode';

export class ControllerExecutionOptions {
  public mode: ExecutionMode = ExecutionMode.spawn;
  public script: string = './node_modules/.bin/wdx-daemon';
  public options: SpawnOptions|WorkerOptions;
}
/**
 * Elrest eDesign Runtime IPC Typescript Model Script
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */

'use strict';

import {File} from './../Filesystem';
import * as fs from 'fs';
import {ExecutionMode, Instance} from './../Instance';
import {INSTANCE_NAMESPACE} from './index';

export class Script extends File {
  public name: string;
  public path: string;
  public stats?: fs.Stats;
  public content?: string;
  public mime?: string;
  public instance?: Instance;
}

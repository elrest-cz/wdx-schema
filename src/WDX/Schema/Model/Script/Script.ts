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
  declare public name: string;
  declare public path: string;
  declare public stats?: fs.Stats;
  declare public content?: string;
  declare public mime?: string;
  public instance?: Instance;
}

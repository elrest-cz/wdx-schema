/**
 * Elrest eDesign Runtime IPC Typescript Model Script
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */

'use strict';

import {Entry, File} from './../Filesystem';
import * as fs from 'fs';
import {ExecutionMode, Instance} from './../Instance';
import {INSTANCE_NAMESPACE} from './index';

export class Script extends File {
  constructor(
      public path: string,
      public name: string,
      public stats?: fs.Stats,
      public content?: string,
      public instance?: Instance,
  ) {
    super(name, path, stats, content);
  }
}

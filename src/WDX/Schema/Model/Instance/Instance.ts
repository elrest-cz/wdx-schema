/**
 * Elrest eDesign Runtime IPC Typescript Model Instance
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict'

import{Status} from './Status';
import {AbstractApplication} from '../Application';
import {ExecutionOptions} from './ExecutionOptions';
import {RestartOptions} from './RestartOptions';
import {CronOptions} from './CronOptions';
import {LogOptions} from './LogOptions';

export class Instance {
  constructor(

      public uuid: string,

      public name?: string,

      public status?: Status,

      public application?: AbstractApplication,

      public executionOptions?: ExecutionOptions,

      public restartOptions?: RestartOptions,

      public cronOptions?: CronOptions,

      public logOptions?: LogOptions,

      public enabled?: boolean,

      public processId?: number,

      public threadId?: number,

      public memory?: number,

      public cpu?: number,
  ) {}
}
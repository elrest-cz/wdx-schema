/**
 * Elrest eDesign Runtime IPC Typescript Model Instance
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict'

import{Status} from './Status';
import {ExecutionMode} from './ExecutionMode';
import {AbstractApplication} from '../Application';
import {ExecutionEnvironment} from './../';
import {v4 as uuidv4} from 'uuid';

export class Instance {
  constructor(

      public uuid: string = uuidv4(),

      public executionEnvironment?: ExecutionEnvironment.Options,

      public processId?: number,

      public threadId?: number,

      public name?: string,

      public executionMode?: ExecutionMode,

      public application?: AbstractApplication,

      public status?: Status,

      public restart?:
          {autorestart?: boolean, maxRestarts?: number, restartCount?: number},

      public memory?: number,

      public cpu?: number,

      public cron?: {
        /**
         * Seconds 0-59
         */
        seconds: string,

        minutes: string,

        hours: string,

        dayOfTHeMonth: string,

        month: string,

        dayOfTheWeek: string,

        year: string,
      },
  ) {
  }
}
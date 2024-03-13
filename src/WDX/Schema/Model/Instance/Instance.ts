/**
 * Elrest eDesign Runtime IPC Typescript Model Instance
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import {v4 as uuidv4} from 'uuid';
import {Status} from './Status';
import {ExecutionMode} from './ExecutionMode';
import {Logs} from './Logs';
import {Monit} from './Monit';
import {AbstractApplication} from '../Application';
export class Instance {
  public uuid: string;

  public processId?: number;

  public threadId?: number;

  public title: string = '';

  public mode?: ExecutionMode;

  public application?: AbstractApplication;

  public status: Status = Status.Offline;

  public interpreter?: string;

  public script?: string;

  public argsv?: any;

  public env?: any;

  public cwd?: string;

  public restart?:
      {autorestart?: boolean, maxRestarts?: number, restartCount?: number};


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
  };
}
/**
 * Elrest eDesign Runtime IPC Typescript Model Instance
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict'

import {v4 as uuidv4} from 'uuid';
import{Status} from './Status';
import {ExecutionOptions} from './ExecutionOptions';
import {RestartOptions} from './RestartOptions';
import {CronOptions} from './CronOptions';
import {LogOptions} from './LogOptions';
import {DataSourceOptions} from './DataSourceOptions';
import {TCPOptions} from './TCPOptions';
import {UDPOptions} from './UDPOptions';
import {ResourceUsage} from './ResourceUsage';
import {LogLevel} from './LogLevel';

export class Instance {
  public uuid: string;

  public code: string;

  public tcpOptions?: TCPOptions;

  public udpOptions?: UDPOptions;

  public dataSourceOptions?: DataSourceOptions = new DataSourceOptions();

  public createdDate: number = Date.now();

  public updatedDate: number = this.createdDate;

  public uptime: number|undefined;

  public locale: number|undefined;

  public resourceUsage: ResourceUsage|undefined;

  public namespace: string|undefined;

  public logOptions: LogOptions;

  constructor(
      uuid: string =  uuidv4(),

      public name?: string,

      public status: Status = Status.Offline,

      public executionOptions?: ExecutionOptions,

      public restartOptions?: RestartOptions,

      public cronOptions?: CronOptions,

      logOptions?: LogOptions,

      public enabled?: boolean,

      public processId?: number,

      public parentProcessId?: number,

      public threadId?: number,
  ) {
    this.uuid = uuid;
    if (logOptions) {
      this.logOptions = logOptions;
    } else {
      this.logOptions = new LogOptions(
          LogLevel.debug,
          undefined,
          undefined,
          undefined,
          true,
          './logs/' + uuid + '.log',
      );
    }
  }
}
/**
 * Elrest eDesign Runtime IPC Typescript Model Instance
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict'

import{Status} from './Status';
import {ExecutionOptions} from './ExecutionOptions';
import {RestartOptions} from './RestartOptions';
import {CronOptions} from './CronOptions';
import {LogOptions} from './LogOptions';
import {DataSourceOptions} from './DataSourceOptions';
import {TCPOptions} from './TCPOptions';
import {UDPOptions} from './UDPOptions';
import {ResourceUsage} from './ResourceUsage';

export class Instance {
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

  constructor(

      public uuid: string,

      public name?: string,

      public status?: Status,

      public executionOptions?: ExecutionOptions,

      public restartOptions?: RestartOptions,

      public cronOptions?: CronOptions,

      public logOptions?: LogOptions,

      public enabled?: boolean,

      public processId?: number,

      public parentProcessId?: number,

      public threadId?: number,
  ) {}
}
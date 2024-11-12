/**
 * Elrest eDesign Runtime IPC Typescript Model Data Schema
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import {AlarmCondition} from './AlarmCondition';
import {AlarmStatus} from './AlarmStatus';
import {AlarmType} from './AlarmType';

export class AlarmHistory {
  constructor(
      public id?: number,
      public alarmUuid?: string,
      public name?: string,
      public active?: boolean,
      public number?: number,
      public type?: AlarmType,
      public status?: AlarmStatus,
      public cause?: string,
      public reaction?: string,
      public correction?: string,
      public createDateTime: number = Date.now(),
  ) {}
}
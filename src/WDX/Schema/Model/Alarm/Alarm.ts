/**
 * Elrest eDesign Runtime IPC Typescript Model Data Schema
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import {AlarmCondition} from './AlarmCondition';
import { AlarmHistory } from './AlarmHistory';
import {AlarmStatus} from './AlarmStatus';
import {AlarmType} from './AlarmType';

export class Alarm {
  constructor(
      public id?: number,
      public name?: string,
      public active: boolean = true,
      public message?: string,
      public messageOff?: string,
      public number?: number,
      public type?: AlarmType,
      public status?: AlarmStatus,
      public cause?: string,
      public reaction?: string,
      public correction?: string,
      public createDateTime: number = Date.now(),
      public updatedDateTime: number = createDateTime,
      public conditions: AlarmCondition[] = [],
      public history: AlarmHistory[] = [],
  ) {}
}
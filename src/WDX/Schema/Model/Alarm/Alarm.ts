/**
 * Elrest eDesign Runtime IPC Typescript Model Data Schema
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import {v4 as uuidv4} from 'uuid';
import {AlarmCondition} from './AlarmCondition';
import {AlarmHistory} from './AlarmHistory';
import {AlarmStatus} from './AlarmStatus';
import {AlarmType} from './AlarmType';
import {AlarmClassification} from './AlarmClassification';

export class Alarm {
  constructor(
      public name: string,
      public active: boolean = true,
      public number: number,
      //public classification: AlarmClassification,
      public type: AlarmType,
      public conditions: AlarmCondition[] = [],
      public message?: string,
      public messageOff?: string,
      public uuid: string = uuidv4(),
      public id?: number,
      public status: AlarmStatus = AlarmStatus.NONE,
      public history: AlarmHistory[] = [],
      public cause?: string,
      public reaction?: string,
      public correction?: string,
      public createDateTime: number = Date.now(),
      public updatedDateTime: number = createDateTime,
  ) {}
}
/**
 * Elrest eDesign Runtime IPC Typescript Model Data Schema
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import {v4 as uuidv4} from 'uuid';
import {AlarmConditionExpression} from './AlarmConditionExpression';

export class AlarmCondition {
  constructor(
      public path: string ='',
      public expression: AlarmConditionExpression|undefined = null,
      public value: any | undefined = undefined,
      public uuid: string = uuidv4(),
      public id?: number,
      public createDateTime: number = Date.now(),
      public updatedDateTime: number = createDateTime,
  ) {}
}
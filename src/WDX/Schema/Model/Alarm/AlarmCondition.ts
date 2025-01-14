/**
 * Elrest eDesign Runtime IPC Typescript Model Data Schema
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import {AlarmConditionExpression} from './AlarmConditionExpression';

export class AlarmCondition {
  constructor(
      public id?: number,
      public path?: string,
      public expression?: AlarmConditionExpression,
      public value?: string,
      public createDateTime: number = Date.now(),
      public updatedDateTime: number = createDateTime,
  ) {}
}
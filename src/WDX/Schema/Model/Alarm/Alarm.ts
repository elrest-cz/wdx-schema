/**
 * Elrest eDesign Runtime IPC Typescript Model Data Schema
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import {AlarmCondition} from './AlarmCondition';

export class Alarm {
  constructor(
      public id?: number,
      public name?: string,
      public active: boolean = true,
      public message?: string,
      public number?: number,
      public createDateTime: number = Date.now(),
      public updatedDateTime: number = createDateTime,
      public conditions: AlarmCondition[] =
          [
            new AlarmCondition(),
          ],
  ) {}
}
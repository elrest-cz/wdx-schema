/**
 * Elrest eDesign Runtime IPC Typescript Model Data Schema
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import {v4 as uuidv4} from 'uuid';

export class DataSet {
  constructor(
      public uuid: string = uuidv4(),
      public id?: number,
      public name?: string,
      public label?: string,
      public dataSchemaPath?: string,
      public color?: string,
      /**
       * Y-Axis uuid
       */
      public yAxis?: string,
      public enabled: boolean = false,
      public visible: boolean = false,
      public valueSnapshot?: string|undefined,
  ) {}
}
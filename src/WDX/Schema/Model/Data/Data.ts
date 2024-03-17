/**
 * Elrest eDesign Runtime IPC Typescript Model Data
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import {DataValue} from './DataValue';
import {DataSchema} from './DataSchema';

export class Data {
  constructor(
      public path: string,
      public schema: DataSchema,
      public value: DataValue,
  ) {}
}
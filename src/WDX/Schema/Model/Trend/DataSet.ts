/**
 * Elrest eDesign Runtime IPC Typescript Model Data Schema
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

export class DataSet {
  constructor(
      public id?: number,
      public name?: string,
      public label?: string,
      public dataSchemaPath?: string,
      public color?: string,
      public yAxis?: string,
      public enabled: boolean = false,
      public visible: boolean = false,
  ) {}
}
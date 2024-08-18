/**
 * Elrest eDesign Runtime IPC Typescript Model Data Schema
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

export class Alarm {
  constructor(
      public id?: number,
      public name?: string,
      public active?: boolean,
      public status?: string,
      public createDateTime?: number,
      public updatedDateTime?: number,

  ) {}
}
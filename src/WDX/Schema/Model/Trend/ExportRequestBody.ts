/**
 * Elrest eDesign Runtime IPC Typescript Model Data Schema
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import {Type} from './Export/Type';

export class ExportRequestBody {
  constructor(
      public trendUuid: string,
      public type: Type,
      public dateFrom?: number,
      public dateTo?: number,
  ) {}
}
/**
 * Elrest eDesign Runtime IPC Typescript Model Data Schema
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

export class GraphDataRequestBody {
  constructor(
      public trendId: number,
      public dateFrom?: number,
      public dateTo?: number,
  ) {}
}
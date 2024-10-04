/**
 * Elrest eDesign Runtime IPC Typescript Model Data Schema
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import {GraphDataSet} from './GraphDataSet';

export class GraphData {
  constructor(
      public trendId: number,
      public labels: string[],
      public datasets: GraphDataSet[],
  ) {}
}
/**
 * Elrest eDesign Runtime IPC Typescript Model Data Schema
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import {GraphDataSet} from './GraphDataSet';
import {v4 as uuidv4} from 'uuid';

export class GraphData {
  constructor(
      public labels: string[] =[],
      public datasets: GraphDataSet[] = [],
      public trendUuid: string = uuidv4(),
  ) {}
}
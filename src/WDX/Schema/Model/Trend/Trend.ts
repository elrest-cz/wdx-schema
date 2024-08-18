/**
 * Elrest eDesign Runtime IPC Typescript Model Data Schema
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import {XAxis} from './XAxis';
import {YAxis} from './YAxis';


export class Trend {
  constructor(
      public id?: number,
      public name?: string,
      public active?: boolean,

      public showLines?: boolean,
      public showLabels?: boolean,

      public intervalPicker?: boolean,
      public exportCurrentViewButton?: boolean,
      public exportFullDataButton?: boolean,
      public configureDatasets?: boolean,
      public resetButton?: boolean,

      public legend?: boolean,
      public tooltips?: boolean,
      public extendedTouchFeatures?: boolean,
      public zoom?: boolean,

      public xAxis?: XAxis,
      public yAxis?: YAxis[],

  ) {}
}
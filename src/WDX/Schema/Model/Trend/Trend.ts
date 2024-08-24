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
      public active: boolean =true,

      public showLines: boolean = true,
      public showLabels: boolean = true,

      public intervalPicker?: boolean,
      public exportCurrentViewButton?: boolean,
      public exportFullDataButton?: boolean,
      public configureDatasets?: boolean,
      public resetButton?: boolean,

      public legend?: boolean,
      public tooltips?: boolean,
      public extendedTouchFeatures?: boolean,
      public zoom?: boolean,

      public xAxis: XAxis = new XAxis(),
      public yAxis: YAxis[] = [new YAxis()],

      public createDateTime: number = Date.now(),
      public updatedDateTime: number = createDateTime,

  ) {}
}
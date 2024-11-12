/**
 * Elrest eDesign Runtime IPC Typescript Model Data Schema
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import {XAxis} from './XAxis';
import {YAxis} from './YAxis';
import {DataSet} from './DataSet';
import {v4 as uuidv4} from 'uuid';

export class Trend {
  constructor(
      public name?: string,
      /**
       * Data pool interval
       */
      public dataPoolInterval: number = 1000,
      public active: boolean = true,

      public showLines: boolean = true,
      public showLabels: boolean = true,

      public intervalPicker?: boolean,
      public exportCurrentViewButton?: boolean,
      public exportFullDataButton?: boolean,
      public resetButton?: boolean,

      public legend?: boolean,
      public tooltips?: boolean,
      public extendedTouchFeatures?: boolean,
      public zoom?: boolean,

      public xAxis: XAxis = new XAxis(),
      public yAxis: YAxis[] = [new YAxis()],
      public dataSet: DataSet[] = [new DataSet()],

      public createDateTime: number = Date.now(),
      public updatedDateTime: number = createDateTime,

      public uuid: string = uuidv4(),
      public id?: number,
  ) {}
}
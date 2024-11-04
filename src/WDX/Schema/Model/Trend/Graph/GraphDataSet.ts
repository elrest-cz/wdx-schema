/**
 * Elrest eDesign Runtime IPC Typescript Model Trend Graph DataSet
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

export class GraphDataSet {
  constructor(
      public label: string = '',
      public uuid: string = '',
      public borderColor: string = '',
      public backgroundColor: string = '',
      public pointBackgroundColor: string = '',
      public pointBorderColor: string = '',
      public hidden: boolean = false,
      public showLine: boolean = true,
      public yAxisID: string = '',
      public data: Array<any> = [],
  ) {}
}
/**
 * Elrest eDesign Runtime Library Messages Model Instance Application Module
 * Alarming Application
 *
 *
 *
 * @copyright 2024 Elrest AutomationsSysteme GMBH
 */
'use strict';

import {Type} from './Type';
import {Instance} from './Instance';
import {AlarmExecutionOptions} from './AlarmExecutionOptions';
import {DataSourceOptions} from './DataSourceOptions';

export class AlarmInstance extends Instance {
  public code: string = Type.Alarm;
  public namespace: string = Type.Controller;
  public executionOptions?: AlarmExecutionOptions = new AlarmExecutionOptions();
  public dataSourceOptions?: DataSourceOptions =
      new DataSourceOptions('default');
}
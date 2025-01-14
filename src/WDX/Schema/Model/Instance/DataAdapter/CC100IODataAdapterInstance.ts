/**
 * Elrest eDesign Runtime Library Messages Model Instance Application Module
 * CC100IO Application
 *
 * @copyright 2024 Elrest AutomationsSysteme GMBH
 */
'use strict';

import {Type} from '../Type';
import {Instance} from '../Instance';
import { CC100IODataAdapterExecutionOptions } from './CC100IODataAdapterExecutionOptions';
import { DataSourceOptions } from '../DataSourceOptions';

export class CC100IODataAdapterInstance extends Instance {
  public code: string = Type.CC100IODataAdapter;
  public namespace:string = Type.CC100IODataAdapter;
  public executionOptions?: CC100IODataAdapterExecutionOptions = new CC100IODataAdapterExecutionOptions();
  public dataSourceOptions?: DataSourceOptions = new DataSourceOptions('default');
}
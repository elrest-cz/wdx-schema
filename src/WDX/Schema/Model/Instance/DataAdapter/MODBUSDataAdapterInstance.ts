/**
 * Elrest eDesign Runtime Library Messages Model Instance Application Module
 * MODBUS Application
 *
 * @copyright 2024 Elrest AutomationsSysteme GMBH
 */
'use strict';

import {Type} from '../Type';
import {Instance} from '../Instance';
import {MODBUSOptions} from './MODBUSOptions';
import { MODBUSDataAdapterExecutionOptions } from './MODBUSDataAdapterExecutionOptions';
import { DataSourceOptions } from '../DataSourceOptions';

export class MODBUSDataAdapterInstance extends Instance {
  public code: string = Type.MODBUSDataAdapter;
  public namespace: string=Type.MODBUSDataAdapter;
  public modbusOptions: MODBUSOptions = new MODBUSOptions();
  public executionOptions?: MODBUSDataAdapterExecutionOptions = new MODBUSDataAdapterExecutionOptions();
  public dataSourceOptions?: DataSourceOptions = new DataSourceOptions('default');
}
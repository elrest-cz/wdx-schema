/**
 * Elrest eDesign Runtime Library Messages Model Instance Application Module
 * BACNet Application
 *
 * @copyright 2024 Elrest AutomationsSysteme GMBH
 */
'use strict';

import {Type} from '../Type';
import {Instance} from '../Instance';
import { OPCUADataAdapterExecutionOptions } from './OPCUADataAdapterExecutionOptions';
import { DataSourceOptions } from '../DataSourceOptions';
import { OPCUAOptions } from './OPCUAOptions';

export class OPCUADataAdapterInstance extends Instance {
  public code: string = Type.OPCUADataAdapter;
  public namespace:string = Type.OPCUADataAdapter;
  public options: OPCUAOptions = new OPCUAOptions();
  public executionOptions?: OPCUADataAdapterExecutionOptions = new OPCUADataAdapterExecutionOptions();
  public dataSourceOptions?: DataSourceOptions = new DataSourceOptions('default');
}
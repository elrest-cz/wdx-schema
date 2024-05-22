/**
 * Elrest eDesign Runtime Library Messages Model Instance Application Module
 * ORM Application
 *
 * @copyright 2024 Elrest AutomationsSysteme GMBH
 */
'use strict';

import {Type} from '../Type';
import {Instance} from '../Instance';
import { ORMDataAdapterExecutionOptions } from './ORMDataAdapterExecutionOptions';
import { DataSourceOptions } from '../DataSourceOptions';

export class ORMDataAdapterInstance extends Instance {
  public code: string = Type.ORMDataAdapter;
  public namespace: string = Type.ORMDataAdapter;
  public executionOptions?: ORMDataAdapterExecutionOptions = new ORMDataAdapterExecutionOptions();
  public dataSourceOptions?: DataSourceOptions = new DataSourceOptions('default');
}
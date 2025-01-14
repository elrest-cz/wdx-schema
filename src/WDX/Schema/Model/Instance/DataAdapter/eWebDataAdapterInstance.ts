/**
 * Elrest eDesign Runtime Library Messages Model Instance Application Module
 * eWeb Application
 *
 * @copyright 2024 Elrest AutomationsSysteme GMBH
 */
'use strict';

import {Type} from '../Type';
import {Instance} from '../Instance';
import {eWebOptions} from './eWebOptions';
import { eWebDataAdapterExecutionOptions } from './eWebDataAdapterExecutionOptions';
import { DataSourceOptions } from '../DataSourceOptions';

export class eWebDataAdapterInstance extends Instance {
  public code: string = Type.eWebDataAdapter;
  public namespace: string = Type.eWebDataAdapter;
  public eWebOptions: eWebOptions = new eWebOptions();
  public executionOptions?: eWebDataAdapterExecutionOptions = new eWebDataAdapterExecutionOptions();
  public dataSourceOptions?: DataSourceOptions = new DataSourceOptions('default');
}
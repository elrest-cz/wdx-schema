/**
 * Elrest eDesign Runtime Library Messages Model Instance Application Module
 * MODBUS Application
 *
 * @copyright 2024 Elrest AutomationsSysteme GMBH
 */
'use strict';

import {Type} from '../Type';
import {Instance} from '../Instance';
import {MQOptions} from './MQOptions';
import {MQDataAdapterExecutionOptions} from './MQDataAdapterExecutionOptions';
import {DataSourceOptions} from '../DataSourceOptions';

export class MQDataAdapterInstance extends Instance {
  public code: string = Type.MQDataAdapter;
  public namespace: string = Type.MQDataAdapter;
  public mqOptions: MQOptions = new MQOptions();
  public executionOptions?: MQDataAdapterExecutionOptions =
      new MQDataAdapterExecutionOptions();
  public dataSourceOptions?: DataSourceOptions =
      new DataSourceOptions('default');
}
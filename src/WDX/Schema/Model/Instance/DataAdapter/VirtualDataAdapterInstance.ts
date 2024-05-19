/**
 * Elrest eDesign Runtime Library Messages Model Instance Application Module
 * ORM Application
 *
 * @copyright 2024 Elrest AutomationsSysteme GMBH
 */
'use strict';

import {Type} from '../Type';
import {Instance} from '../Instance';
import { VirtualDataAdapterExecutionOptions } from './VirtualDataAdapterExecutionOptions';

export class VirtualDataAdapterInstance extends Instance {
  public code: string = Type.VirtualDataAdapter;
  public namespace: string = Type.VirtualDataAdapter;
  public executionOptions: VirtualDataAdapterExecutionOptions = new VirtualDataAdapterExecutionOptions();
}
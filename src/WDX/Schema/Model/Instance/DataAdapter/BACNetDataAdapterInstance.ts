/**
 * Elrest eDesign Runtime Library Messages Model Instance Application Module
 * BACNet Application
 *
 * @copyright 2024 Elrest AutomationsSysteme GMBH
 */
'use strict';

import {Type} from '../Type';
import {Instance} from '../Instance';
import {BACNetOptions} from './BACNetOptions';
import { BACNetDataAdapterExecutionOptions } from './BACNetDataAdapterExecutionOptions';

export class BACNetDataAdapterInstance extends Instance {
  public code: string = Type.BACNetDataAdapter;
  public namespace:string = Type.BACNetDataAdapter;
  public bacnetOptions: BACNetOptions = new BACNetOptions();
  public executionOptions?: BACNetDataAdapterExecutionOptions = new BACNetDataAdapterExecutionOptions();
}
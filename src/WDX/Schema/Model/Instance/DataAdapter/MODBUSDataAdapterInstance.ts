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

export class MODBUSDataAdapterInstance extends Instance {
  public code: string = Type.MODBUSDataAdapter;
  public namespace: Type.MODBUSDataAdapter;
  public modbusOptions: MODBUSOptions = new MODBUSOptions();
}
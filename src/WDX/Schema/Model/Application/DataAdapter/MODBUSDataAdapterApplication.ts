/**
 * Elrest eDesign Runtime Library Messages Model Instance Application Module
 * MODBUS Application
 *
 * @copyright 2024 Elrest AutomationsSysteme GMBH
 */
'use strict';

import {Type} from '../Type';
import {AbstractApplication} from '../AbstractApplication';

export class MODBUSDataAdapterApplication extends AbstractApplication {
  public code: string = Type.MODBUSDataAdapterApplication;

  public modbusOptions?: {host?: string; port?: number;}
}
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

export class BACNetDataAdapterInstance extends Instance {
  public code: string = Type.BACNetDataAdapter;
  public bacnetOptions: BACNetOptions;
}
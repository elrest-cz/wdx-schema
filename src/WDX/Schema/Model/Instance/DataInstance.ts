/**
 * Elrest eDesign Runtime Library Messages Model Instance Application Module
 * Data Application Controller
 *
 * @copyright 2024 Elrest AutomationsSysteme GMBH
 */
'use strict';

import {Type} from './Type';
import {Instance} from './Instance';

export class DataInstance extends Instance {
  public code: string = Type.Data;
  public namespace: string = Type.Controller;
}
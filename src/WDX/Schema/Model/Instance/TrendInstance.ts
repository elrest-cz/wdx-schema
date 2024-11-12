/**
 * Elrest eDesign Runtime Library Messages Model Instance Application Module
 * Trending Application
 *
 * @copyright 2024 Elrest AutomationsSysteme GMBH
 */
'use strict';

import {Type} from './Type';
import {Instance} from './Instance';

export class TrendInstance extends Instance {
  public code: string = Type.Trend;
  public namespace: string = Type.Controller;
}
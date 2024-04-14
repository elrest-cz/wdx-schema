/**
 * Elrest eDesign Runtime Library Messages Model Instance Application Module
 * Alarming Application
 *
 *
 *
 * @copyright 2024 Elrest AutomationsSysteme GMBH
 */
'use strict';

import {Type} from './Type';
import {Instance} from './Instance';
import { NodeREDOptions } from './NodeREDOptions';

export class NodeREDInstance extends Instance {
  public code: string = Type.NodeRED;

  public nodeREDOptions?: NodeREDOptions;
}
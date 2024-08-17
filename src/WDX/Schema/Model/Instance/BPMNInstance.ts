/**
 * Elrest eDesign Runtime Library Messages Model Instance Application Module
 * Controller Application Controller
 *
 * @copyright 2024 Elrest AutomationsSysteme GMBH
 */
'use strict';

import {Type} from './Type';
import {Instance} from './Instance';
import {BPMNExecutionOptions} from './BPMNExecutionOptions';
import { NodeREDOptions } from './NodeREDOptions';

export class BPMNInstance extends Instance {
  public code: string = Type.BPMN;

  public namespace: string = Type.Controller;

  public executionOptions: BPMNExecutionOptions = new BPMNExecutionOptions();
  public nodeREDOptions?: NodeREDOptions;
}
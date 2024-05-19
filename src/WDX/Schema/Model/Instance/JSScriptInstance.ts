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
import { JSScriptExecutionOptions } from './JSScriptExecutionOptions';

export class JSScriptInstance extends Instance {
  public code: string = Type.JSScript;
  public namespace: string = Type.JSScript;
  public script: string;
  public executionOptions: JSScriptExecutionOptions = new JSScriptExecutionOptions();

}
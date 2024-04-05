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
import {AbstractApplication} from './AbstractApplication';

export class JSScriptApplication extends AbstractApplication {
  public code: string = Type.JSScriptApplication;

  public script: string;
}
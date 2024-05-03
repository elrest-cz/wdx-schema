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

export class JSSWorkspaceInstance extends Instance {
  public code: string = Type.JSWorkspace;

  public storage: string|undefined;
}
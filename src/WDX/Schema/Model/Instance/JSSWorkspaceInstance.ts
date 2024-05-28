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
import {JSSWorkspaceExecutionOptions} from './JSSWorkspaceExecutionOptions';

export class JSSWorkspaceInstance extends Instance {
  public code: string = Type.JSWorkspace;
  public namespace: string = Type.Controller;
  public storage: string = 'storage';
  public executionOptions: JSSWorkspaceExecutionOptions =
      new JSSWorkspaceExecutionOptions();
}
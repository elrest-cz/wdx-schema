/**
 * Elrest eDesign Runtime Library Messages Model Instance Application Module
 * Controller Application Controller
 *
 * @copyright 2024 Elrest AutomationsSysteme GMBH
 */
'use strict';

import {Type} from './Type';
import {Instance} from './Instance';

export class ControllerInstance extends Instance {
  public code: string = Type.Controller;

  public command?: string;

  /**
   * CLI Instance argument to commands
   */
  public instances?: Array<Instance>;

  /**
   * CLI Instance argument to commands
   */
  public instance?: Instance;

  /**
   * CLI Instance argument to commands
   */
  public instanceConfigFile?: string;
}
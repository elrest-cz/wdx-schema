/**
 * Elrest eDesign Runtime Library Messages Model Instance Application Module
 * Controller Application Controller
 *
 * @copyright 2024 Elrest AutomationsSysteme GMBH
 */
'use strict';

import {Type} from './Type';
import {AbstractApplication} from './AbstractApplication';
import {Instance} from './../Instance/Instance';

export class ControllerCtrlApplication extends AbstractApplication {
  public code: string = Type.ControllerCtrlApplication;

  public instance?: Instance;

  public instanceConfigFile?: string;
}
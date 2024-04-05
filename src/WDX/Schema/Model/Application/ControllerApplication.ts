/**
 * Elrest eDesign Runtime Library Messages Model Instance Application Module
 * Controller Application Controller
 *
 * @copyright 2024 Elrest AutomationsSysteme GMBH
 */
'use strict';

import {Type} from './Type';
import {AbstractApplication} from './AbstractApplication';
import {Instance} from '../../Model/Instance/Instance';

export class ControllerApplication extends AbstractApplication {
  public code: string = Type.ControllerApplication;
  public instances?: Array<Instance>;
}
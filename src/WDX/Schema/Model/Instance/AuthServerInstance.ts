/**
 * Elrest eDesign Runtime Library Messages Model Instance Application Module Web
 * Socket Server Application Controller
 *
 * @copyright 2024 Elrest AutomationsSysteme GMBH
 */
'use strict';

import {Type} from './Type';
import {Instance} from './Instance';
import {AuthServerOptions} from './AuthServerOptions';
import {AuthServerExecutionOptions} from './AuthServerExecutionOptions';

export class AuthServerInstance extends Instance {
  public code: string = Type.AuthServer;
  public namespace: string = Type.Controller;
  public options: AuthServerOptions;
  public executionOptions: AuthServerExecutionOptions =
      new AuthServerExecutionOptions();
}
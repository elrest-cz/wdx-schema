/**
 * Elrest eDesign Runtime Library Messages Model Instance Application Module Web
 * Socket Server Application Controller
 *
 * @copyright 2024 Elrest AutomationsSysteme GMBH
 */
'use strict';

import {Type} from './Type';
import {Instance} from './Instance';
import {APIServerOptions} from './APIServerOptions';
import {APIServerExecutionOptions} from './APIServerExecutionOptions';

export class APIServerInstance extends Instance {
  public code: string = Type.APIServer;
  public namespace: string = Type.APIServer;
  public webSocketServerOptions: APIServerOptions;
  public executionOptions: APIServerExecutionOptions =
      new APIServerExecutionOptions();
}
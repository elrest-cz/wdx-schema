/**
 * Elrest eDesign Runtime Library Messages Model Instance Application Module Web
 * Socket Server Application Controller
 *
 * @copyright 2024 Elrest AutomationsSysteme GMBH
 */
'use strict';

import {Type} from './Type';
import {Instance} from './Instance';
import {WebSocketServerOptions} from './WebSocketServerOptions';
import { WebSocketServerExecutionOptions } from './WebSocketServerExecutionOptions';

export class WebSocketServerInstance extends Instance {
  public code: string = Type.WebSocketServer;
  public namespace: string = Type.Controller;
  public webSocketServerOptions: WebSocketServerOptions;
  public executionOptions: WebSocketServerExecutionOptions = new WebSocketServerExecutionOptions();
}
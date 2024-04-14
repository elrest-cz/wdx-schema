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

export class WebSocketServerInstance extends Instance {
  public code: string = Type.WebSocketServer;

  public webSocketServerOptions: WebSocketServerOptions;
}
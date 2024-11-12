/**
 * Elrest eDesign Runtime Library Messages Model Instance Application Module Web
 * Socket Server Application Controller
 *
 * @copyright 2024 Elrest AutomationsSysteme GMBH
 */
'use strict';


export class WebSocketServerOptions {
  constructor(
      /**
       * @todo extend complete wss optons import {ServerOptions} from 'ws';
       */
      public host?: string|undefined,
      public port?: number|undefined,
      public backlog?: number|undefined,
      public path?: string|undefined,
      public noServer?: boolean|undefined,
      public clientTracking?: boolean|undefined,
      public maxPayload?: number|undefined,
      public skipUTF8Validation?: boolean|undefined,
  ) {}
}
/**
 * Elrest eDesign Runtime Library Messages Model Instance Application Module Web
 * Socket Server Application Controller
 *
 * @copyright 2024 Elrest AutomationsSysteme GMBH
 */
'use strict';

import {Type} from './Type';
import {AbstractApplication} from './AbstractApplication';

export class WebSocketServerApplication extends AbstractApplication {
  public code: string = Type.WebSocketServerApplication;

  public webSocketServerOptions: {
    /**
     * @todo extend complete wss optons import {ServerOptions} from 'ws';
     */
    host?: string | undefined,
    port?: number | undefined,
    backlog?: number | undefined,
    path?: string | undefined,
    noServer?: boolean | undefined,
    clientTracking?: boolean | undefined,
    maxPayload?: number | undefined,
    skipUTF8Validation?: boolean | undefined,
  };
}
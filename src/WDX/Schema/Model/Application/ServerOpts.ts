/**
 * Elrest eDesign Runtime Library Messages Model Instance Application Module
 * ServerOpts Implementation
 *
 * @copyright 2024 Elrest AutomationsSysteme GMBH
 */
'use strict';

export class ServerOpts {
  constructor(
      /**
       * Indicates whether half-opened TCP connections are allowed.
       * @default false
       */
      public allowHalfOpen: boolean|undefined = false,

      /**
       * Indicates whether the socket should be paused on incoming connections.
       * @default false
       */
      public pauseOnConnect: boolean|undefined = false,

      /**
       * If set to `true`, it disables the use of Nagle's algorithm immediately
       * after a new incoming connection is received.
       * @default false
       * @since v16.5.0
       */
      public noDelay: boolean|undefined = false,

      /**
       * If set to `true`, it enables keep-alive functionality on the socket
       * immediately after a new incoming connection is received, similarly on
       * what is done in `socket.setKeepAlive([enable][, initialDelay])`.
       * @default false
       * @since v16.5.0
       */
      public keepAlive: boolean|undefined = false,

      /**
       * If set to a positive number, it sets the initial delay before the first
       * keepalive probe is sent on an idle socket.
       * @default 0
       * @since v16.5.0
       */
      public keepAliveInitialDelay: number|undefined = 0,
  ) {}
}
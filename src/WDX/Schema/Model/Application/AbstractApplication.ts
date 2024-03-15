/**
 * Elrest eDesign Runtime Library Messages Model Instance Application Module
 * ServerOpts Implementation
 *
 * @copyright 2024 Elrest AutomationsSysteme GMBH
 */
'use strict';

import {ServerOpts} from './ServerOpts';
import {ListenOptions} from './ListenOptions';
import {BindOptions, SocketOptions} from 'dgram';

export abstract class AbstractApplication {
  public abstract code: string;

  constructor(
      public tcpOptions?: {
        serverOpts: ServerOpts,
        listenOpts: ListenOptions,
      },
      public udpOption?: {
        serverOpts: SocketOptions,
        listenOpts: BindOptions,
      },
  ) {}
}
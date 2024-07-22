/**
 * Elrest eDesign Runtime Library Messages Model Instance Application Module
 * ServerOpts Implementation
 *
 * @copyright 2024 Elrest AutomationsSysteme GMBH
 */
'use strict';

import {BindOptions, SocketOptions} from 'dgram';

export class UDPOptions {
  constructor(
      public serverOpts: SocketOptions,
      public listenOpts: BindOptions,
  ) {}
}
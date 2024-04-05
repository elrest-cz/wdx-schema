/**
 * Elrest eDesign Runtime Library Messages Model Instance Application Module
 * ServerOpts Implementation
 *
 * @copyright 2024 Elrest AutomationsSysteme GMBH
 */
'use strict';

import {ServerOpts, ListenOptions} from 'node:net';

export class TCPOptions {
  constructor(
      public serverOpts: ServerOpts,
      public listenOpts: ListenOptions,
  ) {}
}
/**
 * Elrest eDesign Runtime Library Messages Model Instance Application Module
 * ServerOpts Implementation
 *
 * @copyright 2024 Elrest AutomationsSysteme GMBH
 */
'use strict';

import {v4 as uuidv4} from 'uuid';
import {ServerOpts} from './ServerOpts';
import {ListenOptions} from './ListenOptions';

export abstract class AbstractApplication {
  public abstract code: string;

  constructor(
      public id: string = uuidv4(),
      public ipc: 'tcp'|'udp'|'none'|undefined = 'none', 
      public tcpOptions: {
        serverOpts: ServerOpts,
        listenOpts: ListenOptions,
      },
      public udpOption: {},
      ) {}
}
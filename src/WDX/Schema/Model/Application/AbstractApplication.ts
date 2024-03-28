/**
 * Elrest eDesign Runtime Library Messages Model Instance Application Module
 * ServerOpts Implementation
 *
 * @copyright 2024 Elrest AutomationsSysteme GMBH
 */
'use strict';

import {DataSourceOptions} from './DataSourceOptions';
import {TCPOptions} from './TCPOptions';
import {UDPOptions} from './UDPOptions';

export abstract class AbstractApplication {
  public abstract code: string;

  constructor(
      public tcpOptions?: TCPOptions,
      public udpOption?: UDPOptions,
      public dataSource?: DataSourceOptions,
  ) {}
}
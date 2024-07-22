/**
 * Elrest eDesign Runtime Library Messages Model Worker Module
 *
 * @copyright 2024 Elrest AutomationsSysteme GMBH
 */

import {ListenOptions} from 'net';

export class NodeREDOptions {
  constructor(
      public listenOptions?: ListenOptions,
      public settings?: any,
  ) {}
}
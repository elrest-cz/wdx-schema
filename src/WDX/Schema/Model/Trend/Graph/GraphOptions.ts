/**
 * Elrest eDesign Runtime IPC Typescript Model Data Schema
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import {GraphScale} from './GraphScale';

export class GraphOptions {
  constructor(
      public responsive: boolean = true,
      public scales: {
        [key: string]: GraphScale,
      } = {},
  ) {}
}
/**
 * Elrest eDesign Runtime IPC Typescript Model Data Schema
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import {DefaultFormat} from './DefaultFormat';

export class XAxis {
  constructor(
      public label: string = '',
      public format?: string,
      public defaultFormat: DefaultFormat = DefaultFormat.HumanReadable,
      public visible: boolean = true,
  ) {}
}
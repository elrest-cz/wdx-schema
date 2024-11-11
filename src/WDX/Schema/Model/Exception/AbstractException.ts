/**
 * Elrest eDesign Runtime Adapter Store Model Data Schema
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import {Code} from './Code';

export class AbstractException  extends Error {
  constructor(
      public message: string,
      public code: Code,
  ) {
    super(message);
  }
}
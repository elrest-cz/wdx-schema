/**
 * Elrest eDesign Runtime Adapter Store Model Data Schema
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import {AbstractException} from './AbstractException';
import { Code } from './Code';

export class UnexpectedErrorException extends AbstractException {
  constructor(
      public message: string,
      public stack: string|undefined = undefined,
  ) {
    super(message, Code.UNEXPECTED_ERROR);
  }
}
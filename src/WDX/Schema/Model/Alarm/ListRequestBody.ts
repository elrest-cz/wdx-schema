/**
 * Elrest eDesign Runtime IPC Typescript Model Data Schema
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import {Request} from '../Pagination/Request';

export class ListRequestBody extends Request {
  constructor(
      public active: boolean|undefined,
      public offset: number,
      public limit: number,
  ) {
    super(offset, limit);
  }
}
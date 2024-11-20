/**
 * Elrest eDesign Runtime IPC Typescript Model Data Schema
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import {Request} from '../Pagination/Request';

export class ListHistoryRequestBody extends Request {
  constructor(
      public alarmCode: number|undefined, 
      public offset: number,
      public limit: number,
  ) {
    super(offset, limit);
  }
}
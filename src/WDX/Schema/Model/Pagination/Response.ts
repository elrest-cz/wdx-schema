/**
 * Elrest eDesign Runtime IPC Typescript Model Pagination Request
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */

'use strict';

export class Response<T> {
  constructor(
      public items: T[],
      public total: number,
      public currentPage: number,
      public totalPages: number,
  ) {}
}

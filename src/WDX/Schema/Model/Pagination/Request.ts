/**
 * Elrest eDesign Runtime IPC Typescript Model Pagination Request
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */

'use strict';


export class Request {
  public static readonly DEFAULT_OFFSET: number = 0;
  public static readonly DEFAULT_LIMIT: number = 20;
  public static readonly DEFAULT_NOLIMIT: number = -1;

  constructor(
      public offset: number =Request.DEFAULT_OFFSET,
      public limit: number = Request.DEFAULT_LIMIT,
  ) {}
}

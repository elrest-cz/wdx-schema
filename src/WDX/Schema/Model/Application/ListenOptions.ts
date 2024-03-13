/**
 * Elrest eDesign Runtime Library Messages Model Instance Application Module Listen Options
 * Listen Options
 *
 * @copyright 2024 Elrest AutomationsSysteme GMBH
 */
'use strict';

export class ListenOptions {
  constructor(
      public port?: number|undefined,
      public host?: string|undefined,
      public backlog?: number|undefined,
      public path?: string|undefined,
      public exclusive?: boolean|undefined,
      public readableAll?: boolean|undefined,
      public writableAll?: boolean|undefined,
      /**
       * @default false
       */
      public ipv6Only: boolean|undefined = false,
  ) {}
}
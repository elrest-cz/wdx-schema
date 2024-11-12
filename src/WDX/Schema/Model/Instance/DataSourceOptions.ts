/**
 * Elrest eDesign Runtime Library Messages Model Instance Application Module
 * ServerOpts Implementation
 *
 * @copyright 2024 Elrest AutomationsSysteme GMBH
 */
'use strict';

export class DataSourceOptions {
  constructor(
      public name?: string,
      public type?: string,
      public host?: string,
      public port?: number,
      public username?: string,
      public password?: string,
      public database?: string,
  ) {}
}
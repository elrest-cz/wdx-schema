/**
 * Elrest eDesign Runtime IPC Typescript Model Runtime
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */

'use strict';


export class JavascriptStack {
  constructor(
      public message: string,
      public stack: Array<string>,
  ) {}
}

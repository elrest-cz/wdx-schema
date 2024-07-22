/**
 * Elrest eDesign Runtime IPC Typescript Model Runtime
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */

'use strict';


export class NativeStack {
  constructor(
      public message: Array<{ps: string, symbol: string}>,
  ) {}
}

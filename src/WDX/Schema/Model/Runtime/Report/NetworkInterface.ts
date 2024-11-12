/**
 * Elrest eDesign Runtime IPC Typescript Model Runtime
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */

'use strict';


export class NetworkInterface {
  constructor(
      public name: string,
      public internal: boolean,
      public mac: string,
      public address: string,
      public netmask: string,
      public family: string,
  ) {}
}

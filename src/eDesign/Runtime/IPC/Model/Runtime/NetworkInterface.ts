/**
 * Elrest eDesign Runtime IPC Typescript Model Runtime Network Interface
 * 
 * @copyright 2023 Elrest Automations Systeme GMBH
 * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/protocol
 */

'use strict';

import { NetworkAddress } from './NetworkAddress';

export class NetworkInterface {

	constructor(

		/**
		 * name
		 * 
		 * @type string
		 * 
		 * Network interface name
		 * 
		 */
		public name: string = '',


		/**
		 * adresses
		 * 
		 * @type Array<NetworkAddress>
		 * 
		 * Network interface addresses array
		 * 
		 */
		public adresses: Array<NetworkAddress> = new Array<NetworkAddress>
	) { }
}

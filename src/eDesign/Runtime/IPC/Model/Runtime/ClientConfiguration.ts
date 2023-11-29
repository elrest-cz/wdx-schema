/**
 * Elrest eDesign Runtime IPC Typescript Model Runtime Client Configuration
 * 
 * @copyright 2023 Elrest Automations Systeme GMBH
 * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/protocol
 */

'use strict';

import { ClientProtocol } from './ClientProtocol';

export class ClientConfiguration {

	constructor(
		public protocol: ClientProtocol = ClientProtocol.ws,
		public host: string = '',
		public port: number = 82,
		public path: string = '/',
	) { }
}

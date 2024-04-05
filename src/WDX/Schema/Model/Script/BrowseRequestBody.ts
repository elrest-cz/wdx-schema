/**
 * Elrest eDesign Runtime IPC Typescript Model Script Browse Request Body
 * 
 * @copyright 2024 Elrest Automations Systeme GMBH
 */

'use strict';

import { BROWSE_DEFAULT_LEVEL } from '.';

export class BrowseRequestBody {

	constructor(
		/**
		 * eDesign Runtime JS Runtime Storage Path
		 */
		public path: string,

		/**
		 * eDesign Runtime JS Runtime Storage Browse Level
		 * 
		 * @default DEFAULT_LEVEL
		 */
		public level: number = BROWSE_DEFAULT_LEVEL
	) { }
}

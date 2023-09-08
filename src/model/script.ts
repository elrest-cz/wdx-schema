/**
 * Elrest eDesign Runtime Library Messages Model Script
 * 
 * @copyright 2023 Elrest AutomationsSysteme GMBH
 */

'use strict'


export const BROWSE_DEFAULT_LEVEL = 1;
export const BROWSE_NO_LEVEL = -1;

import { File } from './filesystem';
import { Instance } from './instance';

/**
 * Elrest eDesign Runtime Library Messages Model Script
 * 
 */
export class Script extends File {

	constructor(
		public name: string,
		public path: string,
		public ctime: Date,
		public mtime: Date,
		public content?: string,
		public instance?: Instance,
	) {
		super(name, path, ctime, mtime, content);
	}
}

/**
 * Elrest eDesign Runtime Library Messages Model Browse Request Body
 * 
 */
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

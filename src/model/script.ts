'use strict'


export const BROWSE_DEFAULT_LEVEL = 1;
export const BROWSE_NO_LEVEL = -1;

import { File } from './filesystem';
import { Instance } from './instance';

/**
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

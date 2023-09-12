/**
 * Elrest eDesign Runtime Library Messages Model Script
 * 
 * @copyright 2023 Elrest AutomationsSysteme GMBH
 */

'use strict'

import * as fs from 'fs';

export const BROWSE_DEFAULT_LEVEL = 1;
export const BROWSE_NO_LEVEL = -1;
export const INSTANCE_NAMESPACE = 'script';

import { File } from './filesystem';
import { ExecutionMode, Instance } from './instance';



/**
 * Elrest eDesign Runtime Library Messages Model Script
 * 
 */
export class Script extends File {
	constructor(
		public name: string,
		public path: string,
		public stats?: fs.Stats,
		public content?: string,
		public mime?: string,
		public instance: Instance = new Instance(
			undefined,
			undefined,
			path,
			INSTANCE_NAMESPACE,
			ExecutionMode.fork,
			undefined,
			undefined
		),

	) {
		super(name, path, stats, content, mime);
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

/**
 * Elrest eDesign Runtime IPC Typescript Model Filesystem File
 * 
 * @copyright 2023 Elrest AutomationsSysteme GMBH
 */

'use strict';

import * as fs from 'fs';
import { Entry } from './Entry';
import { EntryType } from './EntryType';

export class File extends Entry {

	public type: EntryType = EntryType.File;

	constructor(
		public name: string,
		public path: string,
		public stats?: fs.Stats,
		public content?: string,
		public mime?: string,
	) {
		super(name, path, stats, [], content);
	}
}
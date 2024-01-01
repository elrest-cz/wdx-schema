/**
 * Elrest eDesign Runtime IPC Typescript Model Filesystem Directory
 * 
 * @copyright 2024 Elrest AutomationsSysteme GMBH
 */

'use strict';

import * as fs from 'fs';
import { Entry } from './Entry';
import { EntryType } from './EntryType';

export class Directory extends Entry {

	public type: EntryType = EntryType.Directory;

	constructor(
		public name: string,
		public path: string,
		public stats?: fs.Stats,
		public children: Array<Entry> = new Array<Entry>
	) {
		super(name, path, stats, children);
	}
}

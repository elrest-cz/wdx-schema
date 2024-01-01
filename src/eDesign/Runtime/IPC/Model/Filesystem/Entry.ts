/**
 * Elrest eDesign Runtime IPC Typescript Model Filesystem Entry
 * 
 * @copyright 2024 Elrest AutomationsSysteme GMBH
 */

'use strict';

import * as fs from 'fs';
import { EntryType } from './EntryType';

export abstract class Entry {

	public type: EntryType;

	public mime?: string;

	constructor(
		public path: string,
		public name: string,
		public stats?: fs.Stats,
		public children: Array<Entry> = new Array<Entry>,
		public content?: string
	) { }
}
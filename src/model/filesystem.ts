/**
 * Elrest eDesign Runtime Library Messages Filesystem
 * 
 * @copyright 2023 Elrest AutomationsSysteme GMBH
 */

'use strict';

import * as fs from 'fs';

export enum EntryType {
	Directory = "directory",
	File = "file"
}

export const DIRECTORY_SEPARATOR = '\\';

export abstract class Entry {

	public type: EntryType;

	public mime?: string;

	constructor(
		public path: string,
		public name: string,
		public stats?:fs.Stats,
		public children: Array<Entry>= new Array<Entry>,
		public content?: string
	) { }
}

export class Directory extends Entry {

	public type: EntryType = EntryType.Directory;

	constructor(
		public name: string,
		public path: string,
		public stats?:fs.Stats,
		public children: Array<Entry> = new Array<Entry>
	) {
		super(name, path,stats, children);
	}
}

export class File extends Entry {

	public type: EntryType = EntryType.File;

	constructor(
		public name: string,
		public path: string,
		public stats?:fs.Stats,
		public content?: string,
		public mime?: string,
	) {
		super(name, path, stats, [], content);
	}
}
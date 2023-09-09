/**
 * Elrest eDesign Runtime Library Messages Filesystem
 * 
 * @copyright 2023 Elrest AutomationsSysteme GMBH
 */

'use strict';

export abstract class Entry {
	constructor(
		public path: string,
		public name: string,
		public ctime?: Date,
		public mtime?: Date
	) { }
}

export class Directory extends Entry {

	constructor(
		public name: string,
		public path: string,
		public ctime?: Date,
		public mtime?: Date,
		public children: Array<Entry> = new Array<Entry>
	) {
		super(name, path, ctime, mtime);
	}
}

export class File extends Entry {
	constructor(
		public name: string,
		public path: string,
		public ctime: Date,
		public mtime: Date,
		public content?: string
	) {
		super(name, path, ctime, mtime);
	}
}
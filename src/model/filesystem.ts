/**
 * Elrest eDesign Runtime Library Messages Filesystem
 * 
 * @copyright 2023 Elrest AutomationsSysteme GMBH
 */

'use strict';

export class Entry {
	constructor(
		public name: string,
		public created: number,
		public updated: number,
	) { }
}

export class Directory extends Entry {

	constructor(
		public name: string,
		public created: number,
		public updated: number,
		public children: Array<Entry> = new Array<Entry>
	) {
		super(name, created, updated);
	}
}

export class File extends Entry {
	constructor(
		public name: string,
		public created: number,
		public updated: number,
		public content?: string
	) {
		super(name, created, updated);
	}
}
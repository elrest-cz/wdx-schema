/**
 * Elrest eDesign Runtime IPC Typescript Model Package
 * 
 * @copyright 2023 Elrest AutomationsSysteme GMBH
 */
'use strict';

import { Status } from './Status';
import { Author } from './Author';
import { Versions } from './Versions';

export class Package {

	constructor(

		public id: number,

		public author: Array<Author> = new Array<Author>,

		public name: string = '',

		public description: string = '',

		public documentation: string = '',

		public license: string = '',

		public status: Status = Status.Available,

		public currentVersion: string = '',

		public newestVersion: string = '',

		public installed: boolean = false,

		public mandatory: boolean = false,

		public versions: Versions = new Versions,
	) { }
}


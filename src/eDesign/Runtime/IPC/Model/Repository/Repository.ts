/**
 * Elrest eDesign Runtime IPC Typescript Model Repository
 * 
 * @copyright 2024 Elrest Automations Systeme GMBH
 */

'use strict';

import { Package } from '../Package';

export class Repository {
	constructor(
		public id: number,
		public name: string,
		public url: string,
		public authentication: any,
		public packages: Array<Package>
	) { }
}
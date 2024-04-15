/**
 * Elrest eDesign Runtime IPC Typescript Model Runtime
 * 
 * @copyright 2024 Elrest Automations Systeme GMBH
 */

'use strict';

import { Package } from '../Package';
import { Data } from '../Data';
import { Instance } from '../Instance';
import { ClientConfiguration } from './ClientConfiguration';
import { Directory } from '../Filesystem';
import { Repository } from '../Repository';
import { System } from './System';
import { OS } from './OS';

export class Runtime {

	constructor(

		public title: string = '',

		public clientConfiguration: ClientConfiguration = new ClientConfiguration,

		public connections: Instance[] = [],

		/**
		 * eDesign Runtime Host Data
		 */
		public data: Data[] = [],

		/**
		 * eDesign Runtime Host Packages
		 */
		public packages: Package[] = [],

		/**
		 * eDesign Runtime Host Monitoring
		 */
		public scripts: Directory = new Directory('', ''),

		/**
		 * eDesign Runtime Host Repositories
		 */
		public repositories: Repository[] = [],

		/**
		 * eDesign Runtime System
		 */
		public system: System = new System,

		/**
		 * eDesign Runtime Operation system information
		 */
		public os: OS | null = new OS,
	) { }

}

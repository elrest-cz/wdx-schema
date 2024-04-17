/**
 * Elrest eDesign Runtime IPC Typescript Model Runtime
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */

'use strict';

import {Package} from '../Package';
import {Data} from '../Data';
import {Instance} from '../Instance';
import {ClientConfiguration} from './ClientConfiguration';
import {Directory} from '../Filesystem';
import {Repository} from '../Repository';
import {System} from './System';
import {OS} from './OS';

export class Runtime {
  constructor(

      public instances: Instance[] = [],

      public system: System = new System,

      public os: OS|null = new OS,
  ) {}
}

/**
 * Elrest eDesign Runtime IPC Typescript Model Access Role Mode
 *
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */

'use strict';

import {Resource} from '../Resource/Resource';

export class Role {
  constructor(
      public id?: number,
      public name?: string,
      public resources?: Array<Resource>,
      public createdDate?: number,
      public updatedDate?: number,
  ) {}
}
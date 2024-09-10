/**
 * Elrest eDesign Runtime IPC Typescript Model Data Schema
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import {v4 as uuidv4} from 'uuid';
import {YAxisPostion} from './YAxisPostion';

export class YAxis {
  constructor(
      public uuid: string = uuidv4(),
      public id?: number,
      public name?: string,
      public label?: string,
      public min?: number,
      public max?: number,
      public position: YAxisPostion = YAxisPostion.LEFT,
      public format?: string,
      public color?: string,
      public visible: boolean = true,
  ) {}
}
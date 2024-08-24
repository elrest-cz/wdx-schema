/**
 * Elrest eDesign Runtime IPC Typescript Messages Data Delete Schema Request
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import {Trend} from '../../Model/Trend';
import {AbstractMessage} from '../AbstractMessage';
import {Type} from '../Type';


export class SetResponse extends AbstractMessage {
  public type: Type = Type.TrendingSaveResponse;

  declare public body: Trend;
}
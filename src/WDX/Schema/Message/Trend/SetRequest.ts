/**
 * Elrest eDesign Runtime IPC Typescript Messages Data Delete Schema Request
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import {AbstractMessage} from '../AbstractMessage';
import {Type} from '../Type';
import {Trend} from '../../Model/Trend';

export class SetRequest extends AbstractMessage {
  public type: Type = Type.TrendingSaveRequest;

  declare public body: Trend;
}
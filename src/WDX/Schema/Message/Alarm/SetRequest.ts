/**
 * Elrest eDesign Runtime IPC Typescript Messages Data Delete Schema Request
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import {AbstractMessage} from '../AbstractMessage';
import {Type} from '../Type';
import {Alarm} from '../../Model/Alarm';

export class SetRequest extends AbstractMessage {
  public type: Type = Type.AlarmingSetRequest;

  declare public body: Alarm;
}
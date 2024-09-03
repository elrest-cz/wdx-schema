/**
 * Elrest eDesign Runtime IPC Typescript Messages Data Delete Schema Request
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import {Alarm} from '../../Model/Alarm/Alarm';
import {AbstractMessage} from '../AbstractMessage';
import {Type} from '../Type';

export class Update extends AbstractMessage {
  public type: Type = Type.AlarmingUpdate;

  declare public body: Alarm;
}
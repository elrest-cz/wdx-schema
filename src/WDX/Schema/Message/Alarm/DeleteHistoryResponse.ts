/**
 * Elrest eDesign Runtime IPC Typescript Messages Data Delete Schema Request
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import {AlarmHistory} from '../../Model/Alarm/AlarmHistory';
import {AbstractMessage} from '../AbstractMessage';
import {Type} from '../Type';

export class DeleteHistoryResponse extends AbstractMessage {
  public type: Type = Type.AlarmingDeleteHistoryResponse;
  declare public body: Array<AlarmHistory>;
}
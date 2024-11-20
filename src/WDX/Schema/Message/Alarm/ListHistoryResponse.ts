/**
 * Elrest eDesign Runtime IPC Typescript Messages Data Delete Schema Request
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import {Pagination} from '../../Model';
import {AlarmHistory} from '../../Model/Alarm/AlarmHistory';
import {AbstractMessage} from '../AbstractMessage';
import {Type} from '../Type';
export class ListHistoryResponse extends AbstractMessage {
  public type: Type = Type.AlarmingListHistoryResponse;

  declare public body: Pagination.Response<AlarmHistory>;
}
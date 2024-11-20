/**
 * Elrest eDesign Runtime IPC Typescript Messages Data Delete Schema Request
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import {Response} from '../../Model/Pagination/Response';
import {Alarm} from '../../Model/Alarm';
import {AbstractMessage} from '../AbstractMessage';
import {Type} from '../Type';


export class ListResponse extends AbstractMessage {
  public type: Type = Type.AlarmingListResponse;

  declare public body: Response<Alarm>;
}
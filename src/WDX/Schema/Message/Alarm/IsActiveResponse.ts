/**
 * Elrest eDesign Runtime IPC Typescript Messages Data Delete Schema Request
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import {AbstractMessage} from '../AbstractMessage';
import {Type} from '../Type';
import {AlarmStatus} from '../../Model/Alarm/AlarmStatus';


export class IsActiveResponse extends AbstractMessage {
  public type: Type = Type.AlarmingIsActiveResponse;

  /**
   * Alarm - Active
   */
  declare public body: AlarmStatus;
}
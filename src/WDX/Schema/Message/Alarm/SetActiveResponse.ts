/**
 * Elrest eDesign Runtime IPC Typescript Messages Data Delete Schema Request
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import {AlarmStatus} from '../../Model/Alarm';
import {AbstractMessage} from '../AbstractMessage';
import {Type} from '../Type';


export class SetActiveResponse extends AbstractMessage {
  public type: Type = Type.AlarmingSetActiveResponse;

  /**
   * Alarm - Status
   */
  declare public body: AlarmStatus;
}
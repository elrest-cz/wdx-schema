/**
 * Elrest eDesign Runtime IPC Typescript Messages Data Delete Schema Request
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import {AbstractMessage} from '../AbstractMessage';
import {Type} from '../Type';


export class GetStatusRequest extends AbstractMessage {
  public type: Type = Type.AlarmingGetStatusRequest;

  /**
   * Alarm - Code Number
   */
  declare public body: number;
}
/**
 * Elrest eDesign Runtime IPC Typescript Messages Data Delete Schema Request
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import {AbstractMessage} from '../AbstractMessage';
import {Type} from '../Type';


export class ListRequest extends AbstractMessage {
  public type: Type = Type.AlarmingListRequest;

  /**
   * Indicates alarm active true|false or undefined
   */
  declare public body:boolean|undefined;
}
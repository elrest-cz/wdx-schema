/**
 * Elrest eDesign Runtime IPC Typescript Messages Data Unregister Request
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';


import {AbstractMessage} from '../AbstractMessage';
import {Type} from '../Type';


export class UnregisterValueRequest extends AbstractMessage {
  public type: Type = Type.DataUnregisterValueRequest;

  /**
   * Data path
   */
  declare public body: string;
}
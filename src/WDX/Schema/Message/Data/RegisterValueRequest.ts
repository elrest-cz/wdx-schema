/**
 * Elrest eDesign Runtime IPC Typescript Messages Data Register Request
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import {AbstractMessage} from '../AbstractMessage';
import {Type} from '../Type';

export class RegisterValueRequest extends AbstractMessage {
  public type: Type = Type.DataRegisterValueRequest;

  /**
   * Data schema path
   */
  declare public body: string;
}
/**
 * Elrest eDesign Runtime IPC Typescript Messages Data Register Response
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import {AbstractMessage} from '../AbstractMessage';
import {Type} from '../Type';
import {DataValue} from '../../Model/Data';


export class RegisterValueResponse extends AbstractMessage {
  public type: Type = Type.DataRegisterValueResponse;
  declare public body: DataValue;
}
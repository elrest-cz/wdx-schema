/**
 * Elrest eDesign Runtime IPC Typescript Messages Data Unregister Request
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import {UnregisterRequestBody} from '../../Model/Data';
import {MessageError} from '../MessageError';
import {AbstractMessage} from './../AbstractMessage';
import {Type} from './../Type';


export class UnregisterRequest extends AbstractMessage {
  public type: Type = Type.DataUnregisterRequest;
  declare public body: string;
}
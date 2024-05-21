/**
 * Elrest eDesign Runtime IPC Typescript Messages Data Register Schema Changes
 * Response
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import {Type} from '../Type';
import {AbstractMessage} from './../AbstractMessage';


export class RegisterSchemaChangesResponse extends AbstractMessage {
  public type: Type = Type.DataRegisterSchemaChangesResponse;
  declare public body: null;
}
/**
 * Elrest eDesign Runtime IPC Typescript Messages Data Register Schema Changes
 * Request
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import {Type} from '../Type';
import {AbstractMessage} from './../AbstractMessage';


export class UnregisterSchemaChangesRequest extends AbstractMessage {
  public type: Type = Type.DataUnregisterSchemaChangesRequest;
  declare public body: null;
}
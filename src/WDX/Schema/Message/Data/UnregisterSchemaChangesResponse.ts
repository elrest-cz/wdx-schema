/**
 * Elrest eDesign Runtime IPC Typescript Messages Data Register Schema Changes Response
 * 
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import { MessageError } from '../MessageError';
import { Type } from '../Type';
import { AbstractMessage } from './../AbstractMessage';


export class UnregisterSchemaChangesResponse extends AbstractMessage {
	public type: Type = Type.DataUnregisterSchemaChangesResponse;
declare public body: null;
}
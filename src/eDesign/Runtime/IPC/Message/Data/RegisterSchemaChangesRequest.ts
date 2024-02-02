/**
 * Elrest eDesign Runtime IPC Typescript Messages Data Register Schema Changes Request
 * 
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import { MessageError } from '../MessageError';
import { Type } from '../Type';
import { AbstractMessage } from './../AbstractMessage';


export class RegisterSchemaChangesRequest extends AbstractMessage {
	public type: Type = Type.DataRegisterSchemaChangesRequest;
	public body: null;

	constructor(uuid?: string, error?: MessageError, from?: string) {
		super(null, uuid, error, from);
	}
}
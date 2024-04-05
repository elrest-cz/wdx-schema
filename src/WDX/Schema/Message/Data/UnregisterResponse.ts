/**
 * Elrest eDesign Runtime IPC Typescript Messages Data Unregister Response
 * 
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import { UnregisterResponseBody } from '../../Model/Data';
import { MessageError } from '../MessageError';
import { AbstractMessage } from './../AbstractMessage';
import { Type } from './../Type';

export class UnregisterResponse extends AbstractMessage {
	public type: Type = Type.DataUnregisterResponse;
	public body: UnregisterResponseBody;

	constructor(path: string, uuid?: string, error?: MessageError, from?: string) {
		super(new UnregisterResponseBody(path), uuid, error, from);
	}
}

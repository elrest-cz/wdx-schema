/**
 * Elrest eDesign Runtime IPC Typescript Messages Data Delete Schema Response
 * 
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import { MessageError } from '../MessageError';
import { AbstractMessage } from './../AbstractMessage';
import { Type } from './../Type';

export class DeleteSchemaResponse extends AbstractMessage {

	public type: Type = Type.DataDeleteSchemaResponse;
	public body: string;

	constructor(
		path: string,
		uuid?: string,
		error?: MessageError,
		from?: string
	) {
		super(path, uuid, error, from);
	}
}
/**
 * Elrest eDesign Runtime IPC Typescript Messages Data Refresh Schema Request
 * 
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import { MessageError } from '../MessageError';
import { AbstractMessage } from './../AbstractMessage';
import { Type } from './../Type';

export class RefreshSchemaResponse extends AbstractMessage {

	public type: Type = Type.DataRefreshSchemaResponse;

	public body: string;

	constructor(
		body: string,
		uuid?: string,
		error?: MessageError,
		from?: string
	) {
		super(body, uuid, error, from);
	}
}
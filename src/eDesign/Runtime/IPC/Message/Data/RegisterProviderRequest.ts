/**
 * Elrest eDesign Runtime IPC Typescript Messages Data Register Provider Request
 * 
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import { AbstractMessage } from './../AbstractMessage';
import { MessageError } from '../MessageError';
import { Type } from './../Type';
import { DataSchema, RegisterProviderRequestBody } from '../../Model/Data';

export class RegisterProviderRequest extends AbstractMessage {

	public type: Type = Type.DataRegisterProviderRequest;

	public body: RegisterProviderRequestBody;

	constructor(
		provider: string,
		schema: DataSchema,
		uuid?: string,
		error?: MessageError,
		from?: string
	) {
		super(new RegisterProviderRequestBody(provider, schema), uuid, error, from);
	}
}
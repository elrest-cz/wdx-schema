/**
 * Elrest eDesign Runtime IPC Typescript Messages Data Register Request
 * 
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import { AbstractMessage } from './../AbstractMessage';
import { MessageError } from '../MessageError';
import { Type } from './../Type';
import { RegisterRequestBody } from '../../Model/Data';

export class RegisterRequest extends AbstractMessage {
	public type: Type = Type.DataRegisterRequest;
	public body: RegisterRequestBody;

	constructor(path: string, refreshMin?: number, refreshMax?: number, delta?: number, uuid?: string, error?: MessageError, from?: string) {
		super(new RegisterRequestBody(path, refreshMin, refreshMax, delta), uuid, error, from);
	}
}
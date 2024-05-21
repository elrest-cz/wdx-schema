/**
 * Elrest eDesign Runtime IPC Typescript Messages Data Set Value Request
 * 
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import { Data } from '../../Model/Data';
import { SetValueRequestBody } from '../../Model/Data';
import { MessageError } from '../MessageError';
import { AbstractMessage } from './../AbstractMessage';
import { Type } from './../Type';

export class SetValueRequest extends AbstractMessage {
	public type: Type = Type.DataSetValueRequest;
declare public body: SetValueRequestBody;

	constructor(path: string, value: Data, uuid?: string, error?: MessageError, from?: string) {
		super(new SetValueRequestBody(path, value), uuid, error, from);
	}
}

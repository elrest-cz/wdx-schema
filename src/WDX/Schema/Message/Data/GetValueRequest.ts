/**
 * Elrest eDesign Runtime IPC Typescript Messages Data Get Value Response
 * 
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import { GetRequestBody } from '../../Model/Data';
import { MessageError } from '../MessageError';
import { AbstractMessage } from './../AbstractMessage';
import { Type } from './../Type';


export class GetValueRequest extends AbstractMessage {

	public type: Type = Type.DataGetValueRequest;

	declare public body: GetRequestBody;

	constructor(path: string, uuid?: string, error?: MessageError, from?: string) {
		super(new GetRequestBody(path), uuid, error, from);
	}
}

/**
 * Elrest eDesign Runtime IPC Typescript Messages Data Register Schema Changes Response
 * 
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import { DataSchema } from '../../Model/Data';
import { MessageError } from '../MessageError';
import { Type } from '../Type';
import { AbstractMessage } from './../AbstractMessage';


export class SchemaChanges extends AbstractMessage {

	public type: Type = Type.DataSchemaChanges;

	public body?: DataSchema;

	constructor(data?: DataSchema, uuid?: string, error?: MessageError, from?: string) {
		super(data, uuid, error, from);
	}
}
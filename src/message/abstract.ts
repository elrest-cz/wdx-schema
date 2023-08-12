'use strict';

import { v4 as uuidv4 } from 'uuid';
import { Type } from './type';

import { Command } from '@node-ts/bus-messages';

export class MessageError {

	public code: number;

	public message: string;

	constructor(code: number, message: string) {
		this.code = code;
		this.message = message;
	}
}

export class BUSMessage {}

export abstract class AbstractMessage {

	public abstract type: Type;

	public timestamp: number = Date.now();

	public uuid: string;

	public body?: any | null;

	public error?: MessageError | null;

	constructor(body?: any, uuid?: string, error?: MessageError) {
		if (body) this.body = body;
		this.uuid = uuid ? uuid : uuidv4();
		if (error) this.error = error;
	}
}
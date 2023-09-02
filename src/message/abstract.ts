/**
 * Elrest eDesign Runtime Library Messages Models
 * 
 * @copyright 2023 Elrest AutomationsSysteme GMBH
 */
'use strict';

import { v4 as uuidv4 } from 'uuid';

import { Type } from './type';

/**
 * Elrest eDesign Runtime Library Messages  - Message Error
 * 
 * @todo Move to the model
 */
export class MessageError {
	constructor(
		public code: number,
		public message: string
	) {
	}
}

/**
 * Elrest eDesign Runtime Library Messages  - Abstract Message
 * 
 */
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
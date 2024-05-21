/**
 * Elrest eDesign Runtime IPC Typescript Messages Script
 * 
 * @copyright 2024 Elrest Automations Systeme GMBH
 */

'use strict';

import { Entry } from '../../Model/Filesystem';
import { BrowseRequestBody } from '../../Model/Script';
import { AbstractMessage } from './../AbstractMessage';
import { MessageError } from './../MessageError';
import { Type } from './../Type';

export class BrowseRequest extends AbstractMessage {

	public type: Type = Type.ScriptBrowseRequest;

declare public body: BrowseRequestBody;

	constructor(path: string, level?: number, uuid?: string, error?: MessageError) {
		super(new BrowseRequestBody(path, level), uuid, error);
	}
}

export class BrowseResponse extends AbstractMessage {

	public type: Type = Type.ScriptBrowseResponse;

declare public body: Entry;
}

export class SaveRequest extends AbstractMessage {

	public type: Type = Type.ScriptSaveRequest;

declare public body: Entry;
}

export class SaveResponse extends AbstractMessage {

	public type: Type = Type.ScriptSaveResponse;

declare public body: Entry;
}

export class DeleteRequest extends AbstractMessage {

	public type: Type = Type.ScriptDeleteRequest;

declare public body: Entry;
}

export class DeleteResponse extends AbstractMessage {

	public type: Type = Type.ScriptDeleteResponse;

declare public body: Entry;
}


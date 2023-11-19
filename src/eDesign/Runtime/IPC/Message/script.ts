/**
 * Elrest eDesign Runtime Library Messages Script
 * 
 * @copyright 2023 Elrest AutomationsSysteme GMBH
 */

'use strict';

import { Entry } from "../Model/filesystem";
import { BrowseRequestBody } from "../Model/script";
import { AbstractMessage, MessageError } from "./abstract";
import { Type } from "./type";

export class BrowseRequest extends AbstractMessage {

	public type: Type = Type.ScriptBrowseRequest;

	public body: BrowseRequestBody;

	constructor(path: string, level?: number, uuid?: string, error?: MessageError) {
		super(new BrowseRequestBody(path, level), uuid, error);
	}
}

export class BrowseResponse extends AbstractMessage {

	public type: Type = Type.ScriptBrowseResponse;

	public body: Entry;
}

export class SaveRequest extends AbstractMessage {

	public type: Type = Type.ScriptSaveRequest;

	public body: Entry;
}

export class SaveResponse extends AbstractMessage {

	public type: Type = Type.ScriptSaveResponse;

	public body: Entry;
}

export class DeleteRequest extends AbstractMessage {

	public type: Type = Type.ScriptDeleteRequest;

	public body: Entry;
}

export class DeleteResponse extends AbstractMessage {

	public type: Type = Type.ScriptDeleteResponse;

	public body: Entry;
}


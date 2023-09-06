/**
 * Elrest eDesign Runtime Library Messages Script
 * 
 * @copyright 2023 Elrest AutomationsSysteme GMBH
 */

'use strict';

import { Entry } from "../model/filesystem";
import { BrowseRequestBody } from "../model/script";
import { AbstractMessage, MessageError } from "./abstract";
import { Type } from "./type";

export class BrowseRequest extends AbstractMessage {
	
	public type: Type = Type.ScriptBrowseRequest;
	public body: BrowseRequestBody;

	constructor(path: string, uuid?: string, error?: MessageError) {
		super(new BrowseRequestBody(path), uuid, error);
	}
}

export class BrowseResponse extends AbstractMessage {
	
	public type: Type = Type.ScriptBrowseRequest;

	public body: Entry;
}
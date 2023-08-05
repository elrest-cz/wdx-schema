`use strict`

import { AbstractMessage } from "./abstract";
import { Type } from "./type";


export class BrowseRequestBody {

	public static UNLIMITED_LEVEL = -1;

	public path: string;

	public level: number;

	constructor(path: string, level: number = BrowseRequestBody.UNLIMITED_LEVEL) {
		this.path = path;
		this.level = level;
	}
}

export class Data {
	public node_class?: number;
	public type_class?: string;
	public children?: Array<Data>;
}

export class BrowseRequest extends AbstractMessage {
	public type: Type = Type.DataBrowseRequest;
	public body: BrowseRequestBody;
}

export class BrowseResponse extends AbstractMessage {
	public type: Type = Type.DataBrowseResponse;
	public body: Data;
}
export class RegisterRequest extends AbstractMessage {
	public type: Type = Type.DataRegisterRequest;
	public body: RegisterRequestBody;
}

export class RegisterRequestBody {
	public paths: Array<string>;
	public refreshMin?: number;
	public refreshMax?: number;
	public delta?: number;
}

export class RegisterResponse extends AbstractMessage {
	public type: Type = Type.DataRegisterResponse;
	public body: null;
}

export class UnregisterRequestBody {
	public paths: Array<string>;
}

export class UnregisterRequest extends AbstractMessage {
	public type: Type = Type.DataUnregisterRequest;
	public body: UnregisterRequestBody;
}

export class UnregisterResponse extends AbstractMessage {
	public type: Type = Type.DataUnregisterResponse;
	public body: null;
}

export class SetRequestBody {
	public path: string;
	public value: any;
}

export class SetRequest extends AbstractMessage {
	public type: Type = Type.DataSetRequest;
	public body: SetRequestBody;
}

export class SetResponse extends AbstractMessage {
	public type: Type = Type.DataSetResponse;
	public body = null;
}

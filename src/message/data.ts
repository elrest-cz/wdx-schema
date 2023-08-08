`use strict`
import { AbstractMessage } from "./abstract";
import { Type } from "./type";
import {
	BrowseRequestBody,
	Data,
	GetRequestBody,
	RegisterRequestBody,
	SetRequestBody,
	UnregisterRequestBody
} from "../model/data";


export class BrowseRequest extends AbstractMessage {
	public type: Type = Type.DataBrowseRequest;
	public body: BrowseRequestBody;

	constructor(path: string, level: number = BrowseRequestBody.UNLIMITED_LEVEL) {
		super(undefined, undefined, undefined);
		this.body = new BrowseRequestBody(path, level);
	}
}

export class BrowseResponse extends AbstractMessage {
	public type: Type = Type.DataBrowseResponse;
	public body: Data;
}

export class RegisterRequest extends AbstractMessage {
	public type: Type = Type.DataRegisterRequest;
	public body: RegisterRequestBody;

	constructor(paths: Array<string>, refreshMin?: number, refreshMax?: number, delta?: number) {
		super(undefined, undefined, undefined);
		this.body = new RegisterRequestBody(paths, refreshMin, refreshMax, delta);
	}
}

export class RegisterResponse extends AbstractMessage {
	public type: Type = Type.DataRegisterResponse;
	public body: null;
}

export class UnregisterRequest extends AbstractMessage {
	public type: Type = Type.DataUnregisterRequest;
	public body: UnregisterRequestBody;

	constructor(paths: Array<string>) {
		super(undefined, undefined, undefined);
		this.body = new UnregisterRequestBody(paths);
	}
}

export class UnregisterResponse extends AbstractMessage {
	public type: Type = Type.DataUnregisterResponse;
	public body: null;
}

export class GetRequest extends AbstractMessage {
	public type: Type = Type.DataGetRequest;
	public body: GetRequestBody;

	constructor(path: string) {
		super(undefined, undefined, undefined);
		this.body = new GetRequestBody(path);
	}
}

export class GetResponse extends AbstractMessage {
	public type: Type = Type.DataSetResponse;
	public body: Data;
}

export class SetRequest extends AbstractMessage {
	public type: Type = Type.DataSetRequest;
	public body: SetRequestBody;

	constructor(path: string, value: Data) {
		super(undefined, undefined, undefined);
		this.body = new SetRequestBody(path, value);
	}
}

export class SetResponse extends AbstractMessage {
	public type: Type = Type.DataSetResponse;
	public body: Data;
}
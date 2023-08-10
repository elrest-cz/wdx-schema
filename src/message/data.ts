`use strict`
import { AbstractMessage } from "./abstract";
import { Type } from "./type";
import {
	BrowseRequestBody,
	Data,
	DataSchema,
	GetRequestBody,
	RegisterRequestBody,
	SetRequestBody,
	UnregisterRequestBody
} from "../model/data";


export class BrowseRequest extends AbstractMessage {
	public type: Type = Type.DataBrowseRequest;
	public body: BrowseRequestBody;

	constructor(path: string, level: number = BrowseRequestBody.UNLIMITED_LEVEL) {
		super(new BrowseRequestBody(path, level), undefined, undefined);
	}
}

export class BrowseResponse extends AbstractMessage {
	public type: Type = Type.DataBrowseResponse;
	public body: DataSchema;
}

export class RegisterRequest extends AbstractMessage {
	public type: Type = Type.DataRegisterRequest;
	public body: RegisterRequestBody;

	constructor(paths: Array<string>, refreshMin?: number, refreshMax?: number, delta?: number) {
		super(new RegisterRequestBody(paths, refreshMin, refreshMax, delta), undefined, undefined);
	}
}

export class RegisterResponse extends AbstractMessage {
	public type: Type = Type.DataRegisterResponse;
	public body: Data;
}

export class UnregisterRequest extends AbstractMessage {
	public type: Type = Type.DataUnregisterRequest;
	public body: UnregisterRequestBody;

	constructor(paths: Array<string>) {
		super(new UnregisterRequestBody(paths), undefined, undefined);
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
		super(new GetRequestBody(path), undefined, undefined);
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
		super(new SetRequestBody(path, value), undefined, undefined);
	}
}

export class SetResponse extends AbstractMessage {
	public type: Type = Type.DataSetResponse;
	public body: Data;
}
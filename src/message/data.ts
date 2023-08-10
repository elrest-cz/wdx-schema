`use strict`
import { AbstractMessage, MessageError } from "./abstract";
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

	constructor(path: string, refreshMin?: number, refreshMax?: number, delta?: number) {
		super(new RegisterRequestBody(path, refreshMin, refreshMax, delta), undefined, undefined);
	}
}

export class RegisterResponse extends AbstractMessage {
	public type: Type = Type.DataRegisterResponse;
	public body: Data;
}

export class UnregisterRequest extends AbstractMessage {
	public type: Type = Type.DataUnregisterRequest;
	public body: UnregisterRequestBody;

	constructor(path: string, uuid?: string, error?: MessageError) {
		super(new UnregisterRequestBody(path), uuid, error);
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
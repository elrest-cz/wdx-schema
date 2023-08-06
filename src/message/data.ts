`use strict`
import { AbstractMessage } from "./abstract";
import { Type } from "./type";
import {
	BrowseRequestBody,
	Data,
	RegisterRequestBody,
	SetRequestBody,
	UnregisterRequestBody
} from "../model/data";


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

export class RegisterResponse extends AbstractMessage {
	public type: Type = Type.DataRegisterResponse;
	public body: null;
}

export class UnregisterRequest extends AbstractMessage {
	public type: Type = Type.DataUnregisterRequest;
	public body: UnregisterRequestBody;
}

export class UnregisterResponse extends AbstractMessage {
	public type: Type = Type.DataUnregisterResponse;
	public body: null;
}

export class SetRequest extends AbstractMessage {
	public type: Type = Type.DataSetRequest;
	public body: SetRequestBody;
}

export class SetResponse extends AbstractMessage {
	public type: Type = Type.DataSetResponse;
	public body = null;
}
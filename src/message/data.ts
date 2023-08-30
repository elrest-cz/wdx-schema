/**
 * Elrest eDesign Runtime Library Messages Models
 * 
 * @copyright 2023 Elrest AutomationsSysteme GMBH
 * @package Message
 */
`use strict`

import { AbstractMessage, MessageError } from "./abstract";
import { Type } from "./type";
import {
	GetSchemaRequestBody,
	Data,
	DataSchema,
	GetRequestBody,
	RegisterRequestBody,
	UnregisterRequestBody,
	SetValueRequestBody,
	RegisterProviderRequestBody
} from "../model/data";

export class DataUpdate extends AbstractMessage {

	public type: Type = Type.DataUpdate;

	public body: Data;
}

export class RegisterProviderRequest extends AbstractMessage {

	public type: Type = Type.DataRegisterProviderRequest;

	public body: RegisterProviderRequestBody;

	constructor(
		provider: string,
		path: string,
		uuid?: string,
		error?: MessageError
	) {
		super(new RegisterProviderRequestBody(provider, path), uuid, error);
	}
}

export class RegisterProviderResponse extends AbstractMessage {

	public type: Type = Type.DataRegisterProviderResponse;

	public body: undefined;
}

export class ProviderRequest extends AbstractMessage {
	public type: Type = Type.DataProviderRequest;
	public body: any;
}

export class ProviderResponse extends AbstractMessage {
	public type: Type = Type.DataProviderResponse;
	public body: any;
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

export class GetValueRequest extends AbstractMessage {
	public type: Type = Type.DataGetValueRequest;
	public body: GetRequestBody;

	constructor(path: string) {
		super(new GetRequestBody(path), undefined, undefined);
	}
}

export class GetValueResponse extends AbstractMessage {
	public type: Type = Type.DataGetValueResponse;
	public body: Data;
}

export class SetValueRequest extends AbstractMessage {
	public type: Type = Type.DataSetValueRequest;
	public body: SetValueRequestBody;

	constructor(path: string, value: Data, uuid?: string, error?: MessageError) {
		super(new SetValueRequestBody(path, value), uuid, error);
	}
}

export class SetValueResponse extends AbstractMessage {
	public type: Type = Type.DataSetValueResponse;
	public body: Data;

	constructor(path?: string, value?: any, uuid?: string, error?: MessageError) {
		super(path ? new Data(path, value) : undefined, uuid, error);
	}
}

export class SetSchemaRequest extends AbstractMessage {
	public type: Type = Type.DataSetSchemaRequest;
	public body: DataSchema;
}

export class SetSchemaResponse extends AbstractMessage {
	public type: Type = Type.DataSetSchemaResponse;
	public body: DataSchema;
}

export class GetSchemaRequest extends AbstractMessage {

	public type: Type = Type.DataGetSchemaRequest;
	public body: GetSchemaRequestBody;

	constructor(
		path: string,
		level: number = GetSchemaRequestBody.UNLIMITED_LEVEL
	) {
		super(new GetSchemaRequestBody(path, level), undefined, undefined);
	}
}

export class GetSchemaResponse extends AbstractMessage {

	public type: Type = Type.DataGetSchemaResponse;
	public body?: DataSchema;

	constructor(body?: DataSchema, uuid?: string, error?: MessageError) {
		super(body, uuid, error);
	}
}


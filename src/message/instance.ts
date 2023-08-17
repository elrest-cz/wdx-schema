`use strict`

import { AbstractMessage, MessageError } from "./abstract";

import { Type } from './type';

import {
	ListRequestBody,
	Instance,
	Status,

} from "../model/instance";

export class ListRequest extends AbstractMessage {
	public type: Type = Type.InstanceListRequest;
	public body: ListRequestBody;

	constructor(status: Status = Status.Any, uuid?: string, error?: MessageError) {
		super(undefined, uuid, error);
		this.body = new ListRequestBody(status);
	}
}

export class ListResponse extends AbstractMessage {
	public type: Type = Type.InstanceListResponse;
	public body: Array<Instance>;
}


export class RestartRequest extends AbstractMessage {
	public type: Type = Type.InstanceRestartRequest;
	public body: Instance;
}

export class RestartResponse extends AbstractMessage {
	public type: Type = Type.InstanceRestartResponse;
	public body: Instance;
}

export class StartRequest extends AbstractMessage {
	public type: Type = Type.InstanceStartRequest;
	public body: Instance;
}

export class StartResponse extends AbstractMessage {
	public type: Type = Type.InstanceStartResponse;
	public body: Instance;
}

export class DeleteRequest extends AbstractMessage {
	public type: Type = Type.InstanceDeleteRequest;
	public body: Instance;

}

export class DeleteResponse extends AbstractMessage {
	public type: Type = Type.InstanceDeleteResponse;
	public body: Instance;
}

export class StopRequest extends AbstractMessage {
	public type: Type = Type.InstanceStopRequest;
	public body: Instance;

}

export class StopResponse extends AbstractMessage {
	public type: Type = Type.InstanceStopResponse;
	public body: Instance;
}

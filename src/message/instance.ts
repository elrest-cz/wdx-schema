`use strict`

import { AbstractMessage, MessageError } from "./abstract";

import { Type } from './type';
import * as PM2 from 'pm2';

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
	public type: Type = Type.ConnectionRestartRequest;
	public body: Instance;
}

export class RestartResponse extends AbstractMessage {
	public type: Type = Type.ConnectionRestartResponse;
	public body: Instance;
}

export class StartRequest extends AbstractMessage {
	public type: Type = Type.ConnectionStartRequest;
	public body: Instance;
}

export class StartResponse extends AbstractMessage {
	public type: Type = Type.ConnectionStartResponse;
	public body: Instance;
}

export class StopRequest extends AbstractMessage {
	public type: Type = Type.ConnectionStopRequest;
	public body: Instance;

}

export class StopResponse extends AbstractMessage {
	public type: Type = Type.ConnectionStopResponse;
	public body: Instance;
}

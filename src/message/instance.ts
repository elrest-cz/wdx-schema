/**
 * Elrest eDesign Runtime Library Messages
 * 
 * @copyright 2023 Elrest AutomationsSysteme GMBH
 * @package Message
 */

'use strict';


import { AbstractMessage, MessageError } from "./abstract";

import { Type } from './type';

import {
	ListRequestBody,
	Instance,
	Status,
	InfoRequestBody,

} from "../model/instance";

export class InfoRequest extends AbstractMessage {
	public type: Type = Type.InstanceInfoRequest;
	public body: InfoRequestBody;

	constructor(id: number, uuid?: string, error?: MessageError) {
		super(new InfoRequestBody(id), uuid, error);
	}
}

export class InfoResponse extends AbstractMessage {
	public type: Type = Type.InstanceInfoResponse;
	public body: Instance;
}


export class SubscribeRequest extends AbstractMessage {

	public type: Type = Type.InstanceInfoRequest;
	public body: InfoRequestBody;

	constructor(id: number, uuid?: string, error?: MessageError) {
		super(new InfoRequestBody(id), uuid, error);
	}
}

export class SubscribeResponse extends AbstractMessage {
	public type: Type = Type.InstanceInfoResponse;
	public body: Instance;
}



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

export class Monitor extends AbstractMessage {
	public type: Type = Type.InstanceMonitor;
	public body: Array<Instance>;
}

export class MonitorSubscribeRequest extends AbstractMessage {
	public type: Type = Type.InstanceMonitorSubscribeRequest;
	public body: null;
}


export class MonitorSubscribeResponse extends AbstractMessage {
	public type: Type = Type.InstanceMonitorSubscribeResponse;
	public body: null;
}

export class MonitorUnsubscribeRequest extends AbstractMessage {
	public type: Type = Type.InstanceMonitorUnsubscribeRequest;
	public body: null;
}

export class MonitorUnsubscribeResponse extends AbstractMessage {
	public type: Type = Type.InstanceMonitorUnsubscribeResponse;
	public body: null;
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

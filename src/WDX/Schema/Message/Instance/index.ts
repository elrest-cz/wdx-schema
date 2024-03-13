/**
 * Elrest eDesign Runtime IPC Typescript Messages Instance
 * 
 * @copyright 2024 Elrest Automations Systeme GMBH
 */

'use strict';


import { AbstractMessage } from './../AbstractMessage';
import { MessageError } from './../MessageError';
import { Type } from './../Type';

import {
	ListRequestBody,
	Instance,
	InfoRequestBody,
	Logs,
	Status,
} from '../../Model/Instance';

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


export class MonitorInstance extends AbstractMessage {
	public type: Type = Type.InstanceMonitor;
	public body: Instance;
}

export class MonitorSubscribeRequest extends AbstractMessage {

	public type: Type = Type.InstanceMonitorSubscribeRequest;

	/**
	 * Instance name
	 */
	public body: string;
}

export class MonitorSubscribeResponse extends AbstractMessage {
	public type: Type = Type.InstanceMonitorSubscribeResponse;
	public body: Instance;
}

export class MonitorUnsubscribeRequest extends AbstractMessage {

	public type: Type = Type.InstanceMonitorUnsubscribeRequest;

	/**
	 * Instance name
	 */
	public body: string;
}

export class MonitorUnsubscribeResponse extends AbstractMessage {
	public type: Type = Type.InstanceMonitorUnsubscribeResponse;
	public body: string;

	constructor(id: string, uuid?: string, error?: MessageError) {
		super(id, uuid, error);
	}
}

export class ListRequest extends AbstractMessage {
	public type: Type = Type.InstanceListRequest;
	public body: ListRequestBody;

	constructor(status: Status = Status.Any, namespace: string = '', uuid?: string, error?: MessageError) {
		super(new ListRequestBody(status, namespace), uuid, error);
	}
}

export class ListResponse extends AbstractMessage {
	public type: Type = Type.InstanceListResponse;
	public body: Array<Instance>;
}


export class Discovery extends AbstractMessage {
	public type: Type = Type.InstanceDiscovery;
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
/**
 * eDesign Runtime Message Instance Stop Reposnse
 */
export class StopResponse extends AbstractMessage {
	public type: Type = Type.InstanceStopResponse;
	public body: Instance;
}

/**
 * eDesign Runtime Message Instance Save Request
 */
export class SaveRequest extends AbstractMessage {
	public type: Type = Type.InstanceSaveRequest;
	public body: Instance;

}
/**
 * eDesign Runtime Message Instance Save Reposnse
 */
export class SaveResponse extends AbstractMessage {
	public type: Type = Type.InstanceSaveResponse;
	public body: Instance;
}

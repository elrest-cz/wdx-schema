`use strict`

import { AbstractMessage, MessageError } from "./abstract";
import { Type } from './type';
import {
	ConnectRequestBody,
	ListRequestBody,
	Connection,
	RestartRequestBody,
	StartRequestBody,
	Status,
	StopRequestBody

} from "../model/connection";


export class ConnectRequest extends AbstractMessage {
	public type: Type = Type.ConnectionConnectRequest;
	public body: ConnectRequestBody;
}

export class ConnectResponse extends AbstractMessage {
	public type: Type = Type.ConnectionConnectResponse
	public body: null;
}

export class DisconnectRequestBody {
	public connectionId: number;

}
export class DisconnectRequest extends AbstractMessage {
	public type: Type = Type.ConnectionDisconnectRequest;
	public body: DisconnectRequestBody;
}

export class DisconnectResponse extends AbstractMessage {
	public type: Type = Type.ConnectionDisconnectResponse;
	public body: null;
}


export class ListRequest extends AbstractMessage {
	public type: Type = Type.ConnectionListRequest;
	public body: ListRequestBody;

	constructor(status: Status = Status.Any, uuid?: string, error?: MessageError) {
		super(undefined, uuid, error);
		this.body = new ListRequestBody(status);
	}
}

export class ListResponse extends AbstractMessage {
	public type: Type = Type.ConnectionListResponse;
	public body: Array<Connection>;
}


export class RestartRequest extends AbstractMessage {
	public type: Type = Type.ConnectionRestartRequest;
	public body: RestartRequestBody;

	constructor(connectionId: number) {
		super(undefined, undefined, undefined);
		this.body = new StopRequestBody(connectionId);
	}
}

export class RestartResponse extends AbstractMessage {
	public type: Type = Type.ConnectionRestartResponse;
	public body: Connection;
}

export class StartRequest extends AbstractMessage {
	public type: Type = Type.ConnectionStartRequest;
	public body: StartRequestBody;

	constructor(connectionId: number) {
		super(undefined, undefined, undefined);
		this.body = new StartRequestBody(connectionId);
	}
}

export class StartResponse extends AbstractMessage {
	public type: Type = Type.ConnectionStartResponse;
	public body: Connection;
}

export class StopRequest extends AbstractMessage {
	public type: Type = Type.ConnectionStopRequest;
	public body: StopRequestBody;

	constructor(connectionId: number) {
		super(undefined, undefined, undefined);
		this.body = new StopRequestBody(connectionId);
	}

}

export class StopResponse extends AbstractMessage {
	public type: Type = Type.ConnectionStopResponse;
	public body: Connection;
}

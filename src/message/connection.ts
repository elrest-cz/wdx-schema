`use strict`

import { AbstractMessage } from "./abstract";
import { Type } from './type';
import {
	ConnectRequestBody,
	ListRequestBody,
	Connection,
	RestartRequestBody,
	StartRequestBody,
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
}


export class ListResponse extends AbstractMessage {
	public type: Type = Type.ConnectionListResponse;
	public body: Array<Connection>;
}


export class RestartRequest extends AbstractMessage {
	public type: Type = Type.ConnectionRestartRequest;
	public body: RestartRequestBody;
}

export class RestartResponse extends AbstractMessage {
	public type: Type = Type.ConnectionRestartResponse;
	public body: null
}

export class StartRequest extends AbstractMessage {
	public type: Type = Type.ConnectionStartRequest;
	public body: StartRequestBody;
}

export class StartResponse extends AbstractMessage {
	public type: Type = Type.ConnectionStartResponse;
	public body: null;
}

export class StopRequest extends AbstractMessage {
	public type: Type = Type.ConnectionStopRequest;
	public body: StopRequestBody;
}

export class StopResponse extends AbstractMessage {
	public type: Type = Type.ConnectionStopResponse;
	public body: null;
}

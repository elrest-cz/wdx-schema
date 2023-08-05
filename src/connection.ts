`use strict`

import { AbstractMessage } from "./abstract";
import { Type } from './type';

export enum Status {
	Offline = "offline",
	Online = "online",
	Any = "any"
}
export class ConnectRequestBody {
	public connectionId: number;
}

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

export class ListRequestBody {
	public status: Status;
}

export class ListRequest extends AbstractMessage {
	public type: Type = Type.ConnectionListRequest;
	public body: ListRequestBody;
}

export class Connection {
	public id: number;
	public name: string;
	public ip: string;
	public type: string;
	public port: number;
	public protocol: string;
	public ipOpcUa: string;
	public reconnect: boolean;
	public username: string;
	public password: string;
	public project_name: string;
	public application_name: string;
	public device_name: string;
	public ftp_username: string;
	public ftp_password: string;
	public ftp_port: number;
	public main: boolean;
	public modbus_desc: string;
	public type_id: number;
}

export class ListResponse extends AbstractMessage {
	public type: Type = Type.ConnectionListResponse;
	public body: Array<Connection>;
}

export class RestartRequestBody {
	public connectionId: number;
}

export class RestartRequest extends AbstractMessage {
	public type: Type = Type.ConnectionRestartRequest;
	public body: RestartRequestBody;
}

export class RestartResponse extends AbstractMessage {
	public type: Type = Type.ConnectionRestartResponse;
	public body: null
}

export class StartRequestBody {
	public connectionId: number;
}

export class StartRequest extends AbstractMessage {
	public type: Type = Type.ConnectionStartRequest;
	public body: StartRequestBody;
}

export class StartResponse extends AbstractMessage {
	public type: Type = Type.ConnectionStartResponse;
	public body: null;
}

export class StopRequestBody {
	public connectionId: number;
}

export class StopRequest extends AbstractMessage {
	public type: Type = Type.ConnectionStopRequest;
	public body: StopRequestBody;
}

export class StopResponse extends AbstractMessage {
	public type: Type = Type.ConnectionStopResponse;
	public body: null;
}

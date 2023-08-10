`use strict`

export enum Status {
	Any = "any",
	Online = "online",
	Offline = "offline",
	Starting = "Starting",
	Started = "Started",
	Stopping = "Stopping",
	Stopppedg = "Stopppedg",
	Restarting = "Restarting",
	Restarted = "Restarted",
}

export class ConnectRequestBody {

	public connectionId: number;

	constructor(connectionId: number) {
		this.connectionId = connectionId;
	}
}
export class DisconnectRequestBody {

	public connectionId: number;

	constructor(connectionId: number) {
		this.connectionId = connectionId;
	}
}


export class ListRequestBody {
	public status: Status;

	constructor(status: Status) {
		this.status = status;
	}
}

export class RestartRequestBody {

	public connectionId: number;

	constructor(connectionId: number) {
		this.connectionId = connectionId;
	}
}

export class StartRequestBody {

	public connectionId: number;

	constructor(connectionId: number) {
		this.connectionId = connectionId;
	}
}

export class StopRequestBody {

	public connectionId: number;

	constructor(connectionId: number) {
		this.connectionId = connectionId;
	}
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
	public status: Status;
}
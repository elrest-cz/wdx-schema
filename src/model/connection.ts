`use strict`

export enum Status {
	Offline = "offline",
	Online = "online",
	Any = "any"
}

export class ConnectRequestBody {
	public connectionId: number;
}


export class ListRequestBody {
	public status: Status;
}

export class RestartRequestBody {
	public connectionId: number;
}

export class StartRequestBody {
	public connectionId: number;
}

export class StopRequestBody {
	public connectionId: number;
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
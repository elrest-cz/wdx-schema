'use strict';

import { v4 as uuidv4 } from 'uuid';

export class MessageError {

	code?: number;

	message?: string;

	constructor(code: number, message: string) {
		this.code = code;
		this.message = message;
	}
}

export abstract class AbstractMessage {

	public static type: string = "";

	public timestamp?: number = Date.now();

	public uuid?: string;

	public body?: any;

	public error?: MessageError;
}

export class IPCMessage {

	public type?: string;
	public timestamp?: number = Date.now();
	public uuid?: string;
	public body?: any;

	constructor(type: string, body: any, uuid?: string) {
		this.type = type;
		this.uuid = uuid ? uuid : uuidv4();
		this.body = body
	}
}

export class IPCErrorMessage {

	public type?: string;
	public timestamp?: number = Date.now();
	public uuid?: string;
	public error?: MessageError;

	constructor(type: string, error: MessageError, uuid?: string) {
		this.type = type;
		this.uuid = uuid ? uuid : uuidv4();
		this.error = error;
	}
}

export class ErrorResponse extends AbstractMessage {

	public static type = "ErrorResponse";
}

export class DataBrowseRequestBody {

	path?: string;

	level?: number;
}

export class DataBrowseRequest extends AbstractMessage {
	public static type = "DataBrowseRequest";
	body: DataBrowseRequestBody = new DataBrowseRequestBody();
}

export class DataBrowseResponse extends AbstractMessage {
	public static type = "DataBrowseResponse";
	body = {
	};
}

export class DataRegisterRequest extends AbstractMessage {
	public static type = "DataRegisterRequest";
	body = {
		path: ""
	};
}
export class DataRegisterResponse extends AbstractMessage {
	public static type = "DataRegisterResponse";
	body = {
		path: ""
	};
}

export class DataUnregisterRequest extends AbstractMessage {
	public static type = "DataUnregisterRequest";
	body = {
		path: ""
	};
}
export class DataSetRequest extends AbstractMessage {
	public static type = "DataSetRequest";
	body = {
		path: ""
	};
}
export class DataSetResponse extends AbstractMessage {
	public static type = "DataSetResponse";
	body = {
		path: ""
	};
}

export class DataUnregisterResponse extends AbstractMessage {
	public static type = "DataUnregisterResponse";
	body = {
		path: ""
	};
}

export enum ModuleStatus {
	Installed = "installed",
	Avaiable = "available",
	Any = ""
}

export class ModuleListRequestBody extends AbstractMessage {
	public status: ModuleStatus = ModuleStatus.Any;
}


export class ModuleListRequest extends AbstractMessage {
	public static type = "ModuleListRequest";
	public body: ModuleListRequestBody = new ModuleListRequestBody();
}
export class ModuleListResponseItem {

}

export class ModuleListResponse extends AbstractMessage {
	public static type = "ModuleListResponse";
	body: Array<ModuleListResponseItem> = new Array<ModuleListResponseItem>();
}

export class ModuleInstallRequest extends AbstractMessage {
	public static type = "ModuleInstallRequest";
	body = {
		ModuleId: null
	};
}

export class ModuleInstallResponse extends AbstractMessage {
	public static type = "ModuleInstallResponse";
	body = {

	};
}
export class ModuleUninstallRequest extends AbstractMessage {
	public static type = "ModuleUninstallRequest";
	body = {

	};
}

export class ModuleUninstallResponse extends AbstractMessage {
	public static type = "ModuleUninstallResponse";
	body = {

	};
}
export enum ConnectionStatus {
	Offline = "offline",
	Online = "online",
}

export class ConnectionListRequest extends AbstractMessage {
	public static type = "ConnectionListRequest";
	body = {

	};
}

export class ConnectionListResponse extends AbstractMessage {
	public static type = "ConnectionListResponse";
	body = {

	};
}

export class ConnectionConnectRequest extends AbstractMessage {
	public static type = "ConnectionConnectRequest";
	body = {

	};
}

export class ConnectionConnectResponse extends AbstractMessage {
	public static type = "ConnectionConnectResponse";
	body = {

	};
}

export class ConnectionDisconnectRequest extends AbstractMessage {
	public static type = "ConnectionDisconnectRequest";
	body = {

	};
}

export class ConnectionDisconnectResponse extends AbstractMessage {
	public static type = "ConnectionDisconnectResponse";
	body = {

	};
}

export class ConnectionStartRequest extends AbstractMessage {
	public static type = "ConnectionStartRequest";
	body = {

	};
}

export class ConnectionStartResponse extends AbstractMessage {
	public static type = "ConnectionStartResponse";
	body = {

	};
}
export class ConnectionStopRequest extends AbstractMessage {
	public static type = "ConnectionStopRequest";
	body = {

	};
}

export class ConnectionStopResponse extends AbstractMessage {
	public static type = "ConnectionStopResponse";
	body = {

	};
}
export class ConnectionRestartRequest extends AbstractMessage {
	public static type = "ConnectionRestartRequest";
	body = {

	};
}

export class ConnectionRestartResponse extends AbstractMessage {
	public static type = "ConnectionRestartResponse";
	body = {

	};
}

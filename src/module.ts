'use strict'

import { AbstractMessage, MessageError } from "./abstract";
import { Type } from "./type";

export class InstallRequestBody {
	public moduleId: number;
}

export class InstallRequest extends AbstractMessage {
	public type: Type = Type.ModuleInstallRequest;
	public body: InstallRequestBody = new InstallRequestBody();

	constructor(moduleId: number, uuid?: string, error?: MessageError) {
		super(null, uuid, error);
		this.body.moduleId = moduleId;
	}
}

export class InstallResponse extends AbstractMessage {
	public type: Type = Type.ModuleInstallResponse;
	public body: null;
}

export enum Status {
	Installed = "Installed",
	Avaiable = "Available",
	Any = "Any"
}

export class ListRequestBody {
	public status: Status = Status.Any;

	constructor(status?: Status) {
		if (status) {
			this.status = status;
		}
	}
}

export class ListRequest extends AbstractMessage {
	public type: Type = Type.ModuleListRequest;
	public body: ListRequestBody = new ListRequestBody();
}

export class Module {
	public id: number;
	public name: string;
	public description: string;
	public image: string;
	public licence: boolean;
	public price: number;
}

export class ListResponse extends AbstractMessage {
	public type: Type = Type.ModuleListResponse;
	body: Array<Module> = new Array<Module>();
}

export class UninstallRequest extends AbstractMessage {
	public type: Type = Type.ModuleUninstallRequest;
	public body: UninstallRequestBody;
}

export class UninstallRequestBody {
	public moduleId: number;
}

export class UninstallResponse extends AbstractMessage {
	public type: Type = Type.ModuleUninstallResponse;
	public body: null;
}

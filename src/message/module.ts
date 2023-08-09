'use strict'

import { AbstractMessage, MessageError } from "./abstract";
import { Type } from "./type";
import {
	InstallRequestBody,
	ListRequestBody,
	Status,
	Module,
	UninstallRequestBody,
} from "../model/module";



export class InstallRequest extends AbstractMessage {
	public type: Type = Type.ModuleInstallRequest;
	public body: InstallRequestBody;

	constructor(moduleId: number, uuid?: string, error?: MessageError) {
		super(new InstallRequestBody(moduleId), uuid, error);
	}
}

export class InstallResponse extends AbstractMessage {
	public type: Type = Type.ModuleInstallResponse;
	public body: Module;
}


export class ListRequest extends AbstractMessage {
	public type: Type = Type.ModuleListRequest;
	public body: ListRequestBody;

	constructor(status: Status = Status.Any, uuid?: string, error?: MessageError) {
		super(new ListRequestBody(status), uuid, error);
	}
}

export class ListResponse extends AbstractMessage {
	public type: Type = Type.ModuleListResponse;
	public body: Array<Module>;
}

export class UninstallRequest extends AbstractMessage {
	public type: Type = Type.ModuleUninstallRequest;
	public body: UninstallRequestBody;

	constructor(moduleId: number, uuid?: string, error?: MessageError) {
		super(new UninstallRequestBody(moduleId), uuid, error);
	}
}


export class UninstallResponse extends AbstractMessage {
	public type: Type = Type.ModuleUninstallResponse;
	public body: Module;
}

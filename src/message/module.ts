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


export class ListRequest extends AbstractMessage {
	public type: Type = Type.ModuleListRequest;
	public body: ListRequestBody = new ListRequestBody();
}


export class ListResponse extends AbstractMessage {
	public type: Type = Type.ModuleListResponse;
	public body: Array<Module>;
}

export class UninstallRequest extends AbstractMessage {
	public type: Type = Type.ModuleUninstallRequest;
	public body: UninstallRequestBody;
}


export class UninstallResponse extends AbstractMessage {
	public type: Type = Type.ModuleUninstallResponse;
	public body: null;
}

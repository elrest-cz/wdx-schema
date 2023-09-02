/**
 * Elrest eDesign Runtime Library Messages
 * 
 * @copyright 2023 Elrest AutomationsSysteme GMBH
 */

'use strict';

import { AbstractMessage, MessageError } from "./abstract";
import { Type } from "./type";
import {
	InstallRequestBody,
	Status,
	Package,
	UninstallRequestBody,
} from "../model/package";



export class InstallRequest extends AbstractMessage {
	public type: Type = Type.PackageInstallRequest;
	public body: Package;

	constructor(body: Package, uuid?: string, error?: MessageError) {
		super(body, uuid, error);
	}
}

export class InstallResponse extends AbstractMessage {
	public type: Type = Type.PackageInstallResponse;
	public body?: Package;

	constructor(body?: Package, uuid?: string, error?: MessageError) {
		super(body, uuid, error);
	}
}


export class UninstallRequest extends AbstractMessage {
	public type: Type = Type.PackageUninstallRequest;
	public body: Package;

	constructor(body: Package, uuid?: string, error?: MessageError) {
		super(body, uuid, error);
	}
}

export class UninstallResponse extends AbstractMessage {
	public type: Type = Type.PackageUninstallResponse;
	public body?: Package;

	constructor(body?: Package, uuid?: string, error?: MessageError) {
		super(body, uuid, error);
	}
}

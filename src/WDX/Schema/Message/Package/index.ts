/**
 * Elrest eDesign Runtime Library Messages Packages
 * 
 * @copyright 2024 Elrest AutomationsSysteme GMBH
 */

'use strict';

import { AbstractMessage } from './../AbstractMessage';
import { MessageError } from './../MessageError';
import { Type } from './../Type';
import {
	ListRequestBody,
	InfoRequestBody,
	InstallRequestBody,
	Status,
	Package,
	UninstallRequestBody,
} from '../../Model/Package';



/**
 * eDesign Runtime Messages Packages Install Request
 * 
 */
export class InstallRequest extends AbstractMessage {
	public type: Type = Type.PackageInstallRequest;
declare public body: Package;
}

/**
 * eDesign Runtime Messages Packages Install Response
 * 
 */
export class InstallResponse extends AbstractMessage {
	public type: Type = Type.PackageInstallResponse;
declare public body: Package;
}


/**
 * eDesign Runtime Messages Packages Uninstall Request
 * 
 */
export class UninstallRequest extends AbstractMessage {
	public type: Type = Type.PackageUninstallRequest;
declare public body: Package;
}

/**
 * eDesign Runtime Messages Packages Uninstall Response
 * 
 */
export class UninstallResponse extends AbstractMessage {
	public type: Type = Type.PackageUninstallResponse;
declare public body: Package;
}


/**
 * eDesign Runtime Messages Packages List Requests
 * 
 */
export class ListRequest extends AbstractMessage {

	public type: Type = Type.RepositoryListRequest;
declare public body: ListRequestBody;

	constructor(status: Status = Status.Any, uuid?: string, error?: MessageError, from?: string) {
		super(new ListRequestBody(status), uuid, error, from);
	}
}

/**
 * eDesign Runtime Messages Packages List Response
 * 
 */
export class ListResponse extends AbstractMessage {
	public type: Type = Type.RepositoryListResponse;
declare public body: Array<Package>;
}

export class InfoRequest extends AbstractMessage {
	public type: Type = Type.RepositoryInfoRequest;
declare public body: InfoRequestBody;

	constructor(name: string, version?: string, uuid?: string, error?: MessageError, from?: string) {
		super(new InfoRequestBody(name, version), uuid, error, from);
	}
}

export class InfoResponse extends AbstractMessage {
	public type: Type = Type.RepositoryInfoResponse;
declare public body: Package;
}


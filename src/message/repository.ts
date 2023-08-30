/**
 * Elrest eDesign Runtime Library Messages
 * 
 * @copyright 2023 Elrest AutomationsSysteme GMBH
 * @package Message
 */

'use strict';

import { AbstractMessage, MessageError } from "./abstract";
import { Type } from "./type";
import {
	InfoRequestBody,
	ListRequestBody
} from "../model/repository";
import {
	Package,
	PackageVersion,
	Status
} from "../model/package";

/**
 * 
 */
export class RepostioryPackageScoreDetail {
	constructor(
		public maintenance: number,
		public popularity: number,
		public quality: number
	) { }
}

export class RepositoryPackageScore {

	constructor(
		public final: number,
		public detail: RepostioryPackageScoreDetail
	) { }
}

export class RepositoryPackage {
	constructor(
		public flags: any,
		public local: boolean,
		public pack: Package,
		public score: RepositoryPackageScore,
		public searchScore: number
	) { }

}

/**
 * eDesign Runtime Messages List Requests
 * 
 */
export class ListRequest extends AbstractMessage {
	public type: Type = Type.RepositoryListRequest;
	public body: ListRequestBody;

	constructor(status: Status = Status.Any, uuid?: string, error?: MessageError) {
		super(new ListRequestBody(status), uuid, error);
	}
}

export class ListResponse extends AbstractMessage {
	public type: Type = Type.RepositoryListResponse;
	public body: Array<Package>;
}

export class InfoRequest extends AbstractMessage {
	public type: Type = Type.RepositoryInfoRequest;
	public body: InfoRequestBody;

	constructor(name: string, version?: string, uuid?: string, error?: MessageError) {
		super(new InfoRequestBody(name, version), uuid, error);
	}
}

export class InfoResponse extends AbstractMessage {
	public type: Type = Type.RepositoryInfoResponse;
	public body: Package | PackageVersion;
}

/**
 * Elrest eDesign Runtime IPC Typescript Messages Repository
 * 
 * @copyright 2024 Elrest Automations Systeme GMBH
 */

'use strict';

import { AbstractMessage } from './../AbstractMessage';
import { MessageError } from '../MessageError';
import { Type } from './../Type';
import {
	InfoRequestBody,
	ListRequestBody
} from '../../Model/Repository';
import {
	Package,
	Version,
	Status
} from '../../Model/Package';

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
declare public body: ListRequestBody;

	constructor(status: Status = Status.Any, uuid?: string, error?: MessageError) {
		super(new ListRequestBody(status), uuid, error);
	}
}

export class ListResponse extends AbstractMessage {
	public type: Type = Type.RepositoryListResponse;
declare public body: Array<Package>;
}

export class InfoRequest extends AbstractMessage {
	public type: Type = Type.RepositoryInfoRequest;
declare public body: InfoRequestBody;

	constructor(name: string, version?: string, uuid?: string, error?: MessageError) {
		super(new InfoRequestBody(name, version), uuid, error);
	}
}

export class InfoResponse extends AbstractMessage {
	public type: Type = Type.RepositoryInfoResponse;
declare public body: Package | Version;
}

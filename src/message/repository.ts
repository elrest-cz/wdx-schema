'use strict'

import { AbstractMessage, MessageError } from "./abstract";
import { Type } from "./type";
import { ListRequestBody } from "../model/repository";
import { Package, Status } from "../model/package";



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

`use strict`

export class InstallRequestBody {

	public moduleId: number;

	constructor(moduleId: number) {
		this.moduleId = moduleId;
	}
}

export class ListRequestBody {

	public status: Status = Status.Any;

	constructor(status: Status = Status.Any) {
		this.status = status;
	}
}

export class UninstallRequestBody {

	public moduleId: number;

	constructor(moduleId: number) {
		this.moduleId = moduleId;
	}
}

export enum Status {
	Installed = "Installed",
	Avaiable = "Available",
	Any = "Any"
}

export class Module {
	public id: number;
	public name: string;
	public description: string;
	public image: string;
	public licence: boolean;
	public price: number;
	public status: Status;
}
`use strict`

export class InstallRequestBody {
	constructor(moduleId: number) {
	}
}


export class UninstallRequestBody {

	constructor(moduleId: number) {
	}
}

export enum Status {
	Installed = "Installed",
	Avaiable = "Available",
	Any = "Any"
}

export class Package {
	public id: number;
	public name: string;
	public description: string;
	public image: string;
	public licence: boolean;
	public price: number;
	public status: Status;
	public authors: Array<any>;
	public versions: Array<any>;
}
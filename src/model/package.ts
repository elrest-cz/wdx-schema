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


export class PackageVersions {
	[version: string]: PackageVersion
}

/**
 * eDesign Runtime Model Package Distributions
 */
export class PackageDistTags {
	[version: string]: string;
}

/**
 * eDesign Runtime Model Package Maintainer
 */
export class PackageUser {
	constructor(name?: string) { }
}

/**
 * eDesign Runtime Model Package Maintainer
 */
export class PackageMaintainer extends PackageUser {
}

/**
 * eDesign Runtime Model Package Author
 */
export class PackageAuthor extends PackageUser {
}



/**
 * eDesign Runtime Model Package Version
 */
export class PackageVersion {

}



export class Package {
	constructor(
		public author?:Array<PackageAuthor>,
		public name?: string,
		public description?: string,
		public distTags?: PackageDistTags,
		public maintainers?: Array<PackageMaintainer>,
		public readmeFilename?: string,
		public time?: any,
		public license?: string,
		public versions?: PackageVersions,
		public status?:Status,
		public currentVersion?:string
	) { }
}

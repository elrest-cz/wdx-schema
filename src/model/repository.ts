'use strict';


export class Package {
	name: string;
	description: string;
	authors:Array<any>;
	versions:[]
}

export class Repository {
	public id?: number;
	public name: string;
	public url: string;
	public packages:Array<Package>;
}
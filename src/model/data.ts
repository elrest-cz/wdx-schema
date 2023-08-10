`use strict`

export class BrowseRequestBody {

	public static UNLIMITED_LEVEL: number = -1;

	/**
	 * Full data path
	 */
	public path: string;

	public level: number;

	constructor(path: string, level: number = BrowseRequestBody.UNLIMITED_LEVEL) {
		this.path = path;
		this.level = level;
	}
}

export class DataSchema {

	/**
	 * Full data path
	 */
	public path: string;
	public name: string;
	public node_class?: string;
	public type_class?: string;
	public children: Array<DataSchema> = new Array<DataSchema>();

	constructor(
		path: string,
		name: string,
		children: Array<DataSchema> = [],
		node_class?: string,
		type_class?: string
	) {
		this.path = path;
		this.name = name;
		if (children) this.children = children;
		if (node_class) this.node_class = node_class;
		if (type_class) this.type_class = type_class;
	}
}

export class Data {


	constructor(
	) {
	}
}

export class RegisterRequestBody {

	/**
	 * Full data path
	 */
	public path: string;
	public refreshMin?: number;
	public refreshMax?: number;
	public delta?: number;

	constructor(
		path: string,
		refreshMin?: number,
		refreshMax?: number,
		delta?: number
	) {
		this.path = path;
		if (refreshMin) this.refreshMin = refreshMin;
		if (refreshMax) this.refreshMax = refreshMax;
		if (delta) this.delta = delta;
	}
}


export class UnregisterRequestBody {
	/**
	 * Full data path
	 */
	public path: string;

	constructor(path: string) {
		this.path = path;
	}
}

export class GetRequestBody {

	/**
	 * Full data paths
	 */
	public path: string;

	constructor(path: string) {
		this.path = path;
	}
}



export class SetRequestBody {

	/**
	 * Full data paths
	 */
	public path: string;

	public value: Data;

	constructor(path: string, value: Data) {
		this.path = path;
		this.value = value;
	}
}

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

export class Data {

	/**
	 * Full data path
	 */
	public path: string;
	public name: string;
	public value?: any;
	public node_class?: string;
	public type_class?: string;
	public children: Array<Data>=new Array<Data>();

	constructor(
		path: string,
		name: string,
		value: any = undefined,
		children: Array<Data> = [],
		node_class?: string,
		type_class?: string
	) {
		this.path = path;
		this.name = name;
		if (value) this.value = value;
		if (children) this.children = children;
		if (type_class) this.type_class = type_class;
		if (type_class) this.type_class = type_class;
	}
}

export class RegisterRequestBody {

	/**
	 * Full data paths
	 */
	public paths?: Array<string>;
	public refreshMin?: number;
	public refreshMax?: number;
	public delta?: number;

	constructor(
		paths: Array<string>,
		refreshMin?: number,
		refreshMax?: number,
		delta?: number
	) {
		this.paths = paths;
		if (refreshMin) this.refreshMin = refreshMin;
		if (refreshMax) this.refreshMax = refreshMax;
		if (delta) this.delta = delta;
	}
}


export class UnregisterRequestBody {
	/**
	 * Full data paths
	 */
	public paths: Array<string>;

	constructor(paths: Array<string>) {
		this.paths = paths;
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

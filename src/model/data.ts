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
export class GetSchemaRequestBody {

	public static UNLIMITED_LEVEL: number = -1;

	/**
	 * Full data path
	 */
	public path: string;

	public level: number;

	constructor(path: string, level: number = GetSchemaRequestBody.UNLIMITED_LEVEL) {
		this.path = path;
		this.level = level;
	}
}


export class DataSchema {

	constructor(
		public path: string,
		public relativePath:string,
		public name: string,
		public children?: Array<DataSchema>,
		public node_class?: string,
		public type_class?: string
	) {
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

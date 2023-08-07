`use strict`

export class BrowseRequestBody {

	public static UNLIMITED_LEVEL = -1;

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
	public path?: string;
	public node_class?: number;
	public type_class?: string;
	public children?: Array<Data>;

}

export class RegisterRequestBody {

	/**
	 * Full data paths
	 */
	public paths?: Array<string>;
	public refreshMin?: number;
	public refreshMax?: number;
	public delta?: number;
}


export class UnregisterRequestBody {
	public paths: Array<string>;
}


export class SetRequestBody {
	public path: string;
	public value: Data;
}

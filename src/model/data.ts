`use strict`;


/**
 * @abstract
 * eDeesign Runtime Model Data PATH_SEPARATOR 
 * 
 * default .
 * 
 */
export const PATH_SEPARATOR = ".";

export class GetSchemaRequestBody {

	public static UNLIMITED_LEVEL: number = 1;

	constructor(
		public path: string,
		public level: number = GetSchemaRequestBody.UNLIMITED_LEVEL
	) {
	}
}

export class RegisterProviderRequestBody {
	constructor(
		public provider: string,
		public path: string
	) { }
}

export class DataSchema {

	constructor(
		public path: string | undefined,
		public relativePath: string | undefined,
		public name: string | undefined,
		public children?: Array<DataSchema> | undefined,
		public node_class?: string | undefined,
		public type_class?: string | undefined
	) {
	}
}

export class Data {
	constructor(
	) {
	}
}

export class RegisterRequestBody {
	constructor(
		public path: string,
		public refreshMin?: number,
		public refreshMax?: number,
		public delta?: number
	) { }
}


export class UnregisterRequestBody {

	constructor(public path: string) {
	}
}

export class GetRequestBody {
	constructor(public path: string) {
	}
}



export class SetValueRequestBody {

	constructor(public path: string, public value: Data) {
	}
}

/**
 * Elrest eDesign Runtime Library Messages Model Data
 * 
 * @copyright 2023 Elrest AutomationsSysteme GMBH
 */
`use strict`;


/**
 * eDeesign Runtime Model Data PATH_SEPARATOR = '.'
 */
export const PATH_SEPARATOR = ".";

/**
 * eDeesign Runtime Model Data GetSchemaRequestBody
 */
export class GetSchemaRequestBody {

	public static UNLIMITED_LEVEL: number = 1;

	constructor(
		public path: string,
		public level: number = GetSchemaRequestBody.UNLIMITED_LEVEL
	) {
	}
}

/**
 * eDeesign Runtime Model Data ProviderRequestBody
 */
export class RegisterProviderRequestBody {
	constructor(
		public provider: string,
		public path: string
	) { }
}

export class DataSchema {

	constructor(
		public path: string,
		public relativePath: string,
		public name: string | undefined,
		public children?: Array<DataSchema> | undefined,
		public node_class?: string | undefined,
		public type_class?: string | undefined
	) {
	}
}

export class DataValue {
	constructor(
		public path: string,
		public value: any
	) {
	}
}

export class Data {
	constructor(
		public path: string,
		public value: any
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

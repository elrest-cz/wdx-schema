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

/**
 * eDeesign Runtime Model Data Schema Metadata
 * 
 */
export class DataSchemaMetadata {

	/**
	 * Key/Value pairs of any adapter data schema specific names and it's values
	 */
	[name: string]: any;
}

/**
 * eDeesign Runtime Model Data Schema Metadata
 */
export class DataSchema {
	constructor(
		public path: string,
		public relativePath: string,
		public name: string | undefined,
		public children?: Array<DataSchema> | undefined,
		public metadata: DataSchemaMetadata = new DataSchemaMetadata
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


export class UnregisterResponseBody {

	constructor(public path: string) {
	}
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

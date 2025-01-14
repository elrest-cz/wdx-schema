/**
 * Elrest eDesign Runtime IPC Typescript Model Data
 * 
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

export const PATH_SEPARATOR = '.';

import { DataSchema } from './DataSchema';
import * as MetaData from './MetaData';
import { DataType } from './DataType';
import { DataValue } from './DataValue';
import { GetRequestBody } from './GetRequestBody';
import { GetSchemaRequestBody } from './GetSchemaRequestBody';
import { RegisterRequestBody } from './RegisterRequestBody';
import { UnregisterRequestBody } from './UnregisterRequestBody';
import { UnregisterResponseBody } from './UnregisterResponseBody';

export {
	DataSchema,
	MetaData,
	DataType,
	DataValue,
	GetRequestBody,
	GetSchemaRequestBody,
	RegisterRequestBody,
	UnregisterRequestBody,
	UnregisterResponseBody,
};
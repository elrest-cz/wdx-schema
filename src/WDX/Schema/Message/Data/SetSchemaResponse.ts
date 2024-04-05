/**
 * Elrest eDesign Runtime IPC Typescript Messages Data Set Schema Response
 * 
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import { DataSchema } from '../../Model/Data';
import { AbstractMessage } from './../AbstractMessage';
import { Type } from './../Type';

export class SetSchemaResponse extends AbstractMessage {
	public type: Type = Type.DataSetSchemaResponse;
	public body: DataSchema;
}

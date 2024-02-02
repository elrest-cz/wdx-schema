/**
 * Elrest eDesign Runtime IPC Typescript Messages Data Get Schema Response
 * 
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import { DataSchema } from '../../Model/Data';
import { AbstractMessage } from './../AbstractMessage';
import { Type } from './../Type';

export class GetSchemaResponse extends AbstractMessage {

	public type: Type = Type.DataGetSchemaResponse;

	public body: DataSchema | undefined;

}

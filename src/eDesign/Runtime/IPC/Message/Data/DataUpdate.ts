/**
 * Elrest eDesign Runtime IPC Typescript Messages Data Update
 * 
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import { AbstractMessage } from './../AbstractMessage';
import { Type } from './../Type';
import { Data } from '../../Model/Data';

export class DataUpdate extends AbstractMessage {

	public type: Type = Type.DataUpdate;

	public body: Data;
}
/**
 * Elrest eDesign Runtime IPC Typescript Messages Data Register Response
 * 
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import { AbstractMessage } from './../AbstractMessage';
import { Type } from './../Type';
import { Data } from '../../Model/Data';


export class RegisterResponse extends AbstractMessage {
	public type: Type = Type.DataRegisterResponse;
declare public body: Data;
}
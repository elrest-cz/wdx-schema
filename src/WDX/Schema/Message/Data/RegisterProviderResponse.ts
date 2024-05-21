/**
 * Elrest eDesign Runtime IPC Typescript Messages Data Register Provider Response
 * 
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import { AbstractMessage } from './../AbstractMessage';
import { Type } from './../Type';


export class RegisterProviderResponse extends AbstractMessage {

	public type: Type = Type.DataRegisterProviderResponse;

declare public body: undefined;
}

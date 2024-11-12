/**
 * Elrest eDesign Runtime IPC Typescript Messages Runtime Start Request
 * 
 * @copyright 2024 Elrest Automations Systeme GMBH
 */

'use strict';

import { AbstractMessage } from './../AbstractMessage';
import { Type } from './../Type';


export class StopRequest extends AbstractMessage {
	public type: Type = Type.RuntimeStopRequest;
declare public body: null;
}

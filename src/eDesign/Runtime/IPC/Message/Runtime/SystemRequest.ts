/**
 * Elrest eDesign Runtime IPC Typescript Messages Runtime System Request
 * 
 * @copyright 2023 Elrest Automations Systeme GMBH
 */

'use strict';

import { AbstractMessage } from './../AbstractMessage';
import { Type } from './../Type';

/**
 * eDesign Runtime - Messages Runtime System Request
 * @todo remove
 */
export class SystemRequest extends AbstractMessage {
	public type: Type = Type.RuntimeSystemRequest;
	public body: undefined;
}
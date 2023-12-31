/**
 * Elrest eDesign Runtime IPC Typescript Messages Runtime System Response
 * 
 * @copyright 2023 Elrest Automations Systeme GMBH
 */

'use strict';

import { AbstractMessage } from './../AbstractMessage';
import { Type } from './../Type';
import * as Model from '../../Model';


/**
 * eDesign Runtime  - Messages Runtime System Response
 * @todo remove
 */
export class SystemResponse extends AbstractMessage {
	public type: Type = Type.RuntimeSystemResponse;
	public body: Model.Runtime.System;
}

/**
 * Elrest eDesign Runtime IPC Typescript Messages Runtime Monitor
 * 
 * @copyright 2024 Elrest Automations Systeme GMBH
 */

'use strict';

import { AbstractMessage } from './../AbstractMessage';
import { Type } from './../Type';
import * as Model from '../../Model';

/**
 * eDesign Runtime  - Runtime Monitor Message
 * 
 */
export class Monitor extends AbstractMessage {
	public type: Type = Type.RuntimeMonitor;
	public body: Model.Runtime.Runtime;
}

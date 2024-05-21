/**
 * Elrest eDesign Runtime IPC Typescript Messages Runtime Monitor Subscribe Request
 * 
 * @copyright 2024 Elrest Automations Systeme GMBH
 */

'use strict';

import { AbstractMessage } from './../AbstractMessage';
import { Type } from './../Type';



export class MonitorSubscribeRequest extends AbstractMessage {
	public type: Type = Type.RuntimeMonitorSubscribeRequest;
declare public body: null;
}

/**
 * Elrest eDesign Runtime IPC Typescript Messages Runtime Monitor Unsubscribe Response
 * 
 * @copyright 2023 Elrest Automations Systeme GMBH
 */

'use strict';

import { AbstractMessage } from './../AbstractMessage';
import { Type } from './../Type';


export class MonitorUnsubscribeResponse extends AbstractMessage {
	public type: Type = Type.RuntimeMonitorUnsubscribeResponse;
	public body: null;
}

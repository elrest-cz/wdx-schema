/**
 * Elrest eDesign Runtime Library Messages Script
 * 
 * @copyright 2023 Elrest AutomationsSysteme GMBH
 */

'use strict';

import { AbstractMessage } from "./abstract";
import { Type } from "./type";
import * as Model from "../model";

/**
 * eDesign Runtime - Messages Runtime System Request
 * 
 */
export class SystemRequest extends AbstractMessage {
	public type: Type = Type.RuntimeSystemRequest;
	public body: undefined;
}

/**
 * eDesign Runtime  - Messages Runtime System Response
 * 
 */
export class SystemResponse extends AbstractMessage {
	public type: Type = Type.RuntimeSystemResponse;
	public body: Model.Runtime.System;
}

/**
 * eDesign Runtime - Messages Runtime Info Request
 * 
 */
export class InfoRequest extends AbstractMessage {
	public type: Type = Type.RuntimeInfoRequest;
	public body: undefined;
}

/**
 * eDesign Runtime  - Messages Runtime System Response
 * 
 */
export class InfoResponse extends AbstractMessage {
	public type: Type = Type.RuntimeInfoResponse;
	public body: Model.Runtime.Runtime;
}

/**
 * eDesign Runtime  - Runtime Monitor Message
 * 
 */
export class Monitor extends AbstractMessage {
	public type: Type = Type.RuntimeMonitor;
	public body: Model.Runtime.Runtime;
}

export class MonitorSubscribeRequest extends AbstractMessage {
	public type: Type = Type.RuntimeMonitorSubscribeRequest;
	public body: null;
}

export class MonitorSubscribeResponse extends AbstractMessage {
	public type: Type = Type.RuntimeMonitorSubscribeResponse;
	public body: null;
}

export class MonitorUnsubscribeRequest extends AbstractMessage {
	public type: Type = Type.RuntimeMonitorUnsubscribeRequest;
	public body: null;
}

export class MonitorUnsubscribeResponse extends AbstractMessage {
	public type: Type = Type.RuntimeMonitorUnsubscribeResponse;
	public body: null;
}

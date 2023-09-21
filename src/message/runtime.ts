/**
 * Elrest eDesign Runtime Library Messages Script
 * 
 * @copyright 2023 Elrest AutomationsSysteme GMBH
 */

'use strict';

import { System } from "../model/runtime";
import { AbstractMessage } from "./abstract";
import { Type } from "./type";

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
	public body: System;
}

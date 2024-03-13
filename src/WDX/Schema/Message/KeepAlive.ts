/**
 * Elrest eDesign Runtime IPC Typescript Messages Keep Alive
 * 
 * @copyright 2024 Elrest AutomationsSysteme GMBH
 */
'use strict';

import { Type } from './Type';
import { AbstractMessage } from './AbstractMessage';

export class KeepAlive extends AbstractMessage {

	public type: Type = Type.KeepALive;
}
/**
 * Elrest eDesign Runtime IPC Typescript Trending Start Request Message
 * 
 * @copyright 2024 Elrest AutomationsSysteme GMBH
 */
'use strict';

import { AbstractMessage } from '../AbstractMessage';
import { Type } from './../Type';

export class StartRequest extends AbstractMessage {

	public type: Type = Type.TrendingStartRequest;
	public body: string;
}
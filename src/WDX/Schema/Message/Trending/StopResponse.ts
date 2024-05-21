/**
 * Elrest eDesign Runtime IPC Typescript Trending Stop Response Message
 * 
 * @copyright 2024 Elrest AutomationsSysteme GMBH
 */
'use strict';

import { AbstractMessage } from '../AbstractMessage';
import { Type } from './../Type';

export class StopResponse extends AbstractMessage {
	public type: Type = Type.TrendingStopResponse;
declare public body: string;
}
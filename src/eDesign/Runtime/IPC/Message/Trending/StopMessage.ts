/**
 * Elrest eDesign Runtime IPC Typescript Trending Stop Message
 * 
 * @copyright 2024 Elrest AutomationsSysteme GMBH
 */
'use strict';

import { AbstractMessage } from '../AbstractMessage';
import { Type } from './../Type';

export class StopMessage extends AbstractMessage {
	public type: Type = Type.TrendingStop;
	public body: string;
}
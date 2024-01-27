/**
 * Elrest eDesign Runtime IPC Typescript Trending Start Message
 * 
 * @copyright 2024 Elrest AutomationsSysteme GMBH
 */
'use strict';

import { AbstractMessage } from '../AbstractMessage';
import { Type } from './../Type';

export class StartMessage extends AbstractMessage {

	public type: Type = Type.TrendingStart;
	public body: string;
}
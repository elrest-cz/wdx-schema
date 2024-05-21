/**
 * Elrest eDesign Runtime IPC Typescript Trending Start Response Message
 * 
 * @copyright 2024 Elrest AutomationsSysteme GMBH
 */
'use strict';

import { AbstractMessage } from '../AbstractMessage';
import { Type } from './../Type';

export class StartResponse extends AbstractMessage {

	public type: Type = Type.TrendingStartResponse;

declare public body: string;
}
/**
 * Elrest eDesign Runtime IPC Typescript Trending Stop Request Message
 *
 * @copyright 2024 Elrest AutomationsSysteme GMBH
 */
'use strict';

import {AbstractMessage} from '../AbstractMessage';
import {Type} from './../Type';

export class StopRequest extends AbstractMessage {
  public type: Type = Type.TrendingStopRequest;
  declare public body: string;
}
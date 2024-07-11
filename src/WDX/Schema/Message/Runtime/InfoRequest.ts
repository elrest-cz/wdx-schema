/**
 * Elrest eDesign Runtime IPC Typescript Messages Runtime Info Request
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */

'use strict';

import {AbstractMessage} from './../AbstractMessage';
import {Type} from './../Type';

/**
 * eDesign Runtime - Messages Runtime Info Request
 *
 */
export class InfoRequest extends AbstractMessage {
  public type: Type = Type.RuntimeInfoRequest;
  declare public body: null;
}
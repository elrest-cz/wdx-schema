/**
 * Elrest eDesign Runtime IPC Typescript Messages Runtime Info Response
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */

'use strict';

import {AbstractMessage} from './../AbstractMessage';
import {Type} from './../Type';
import * as Model from '../../Model';

/**
 * eDesign Runtime  - Messages Runtime Info Response
 *
 */
export class InfoResponse extends AbstractMessage {
  public type: Type = Type.RuntimeInfoResponse;
  declare public body: Model.Runtime.Runtime;
}

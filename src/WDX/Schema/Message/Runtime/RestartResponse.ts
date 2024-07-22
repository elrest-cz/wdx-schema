/**
 * Elrest eDesign Runtime IPC Typescript Messages Runtime Start Request
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */

'use strict';

import {AbstractMessage} from './../AbstractMessage';
import {Type} from './../Type';


export class RestartResponse extends AbstractMessage {
  public type: Type = Type.RuntimeRestartResponse;
  declare public body: null;
}

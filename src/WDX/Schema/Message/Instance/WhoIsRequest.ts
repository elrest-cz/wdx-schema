
/**
 * Elrest eDesign Runtime IPC Typescript Messages Instance
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */

'use strict';

import {AbstractMessage} from '../AbstractMessage';
import {Type} from '../Type';

export class WhoIsRequest extends AbstractMessage {
  public type: Type = Type.InstanceWhoIsRequest;
  declare public body: string;
}

/**
 * Elrest eDesign Runtime IPC Typescript Messages Instance
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */

'use strict';

import {AbstractMessage} from '../AbstractMessage';
import {Type} from '../Type';

export class DetailRequest extends AbstractMessage {
  public type: Type = Type.InstanceDetailRequest;

  /**
   * Instance UUID
   */
  declare public body: string;
}
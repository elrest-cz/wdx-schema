
/**
 * Elrest eDesign Runtime IPC Typescript Messages Instance
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */

'use strict';

import {AbstractMessage} from '../AbstractMessage';
import {Type} from '../Type';
import {Instance} from '../../Model/Instance';

export class ListResponse extends AbstractMessage {
  public type: Type = Type.InstanceListResponse;
  public body: Array<Instance>;
}

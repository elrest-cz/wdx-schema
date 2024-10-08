/**
 * Elrest eDesign Runtime IPC Typescript Messages Data Update
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import {AbstractMessage} from './../../AbstractMessage';
import {Type} from './../../Type';

export class ListRequest extends AbstractMessage {
  public type: Type = Type.AccessRoleListRequest;

  declare public body: null;
}

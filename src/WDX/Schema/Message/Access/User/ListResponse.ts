/**
 * Elrest eDesign Runtime IPC Typescript Messages Data Update
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import {User} from '../../../Model/Access/User/User';
import {AbstractMessage} from './../../AbstractMessage';
import {Type} from './../../Type';

export class ListResponse extends AbstractMessage {
  public type: Type = Type.AccessUserListResponse;

  declare public body: Array<User>;
}
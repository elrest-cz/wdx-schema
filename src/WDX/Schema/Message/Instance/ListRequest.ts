
/**
 * Elrest eDesign Runtime IPC Typescript Messages Instance
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */

'use strict';

import {MessageError} from '../MessageError';
import {AbstractMessage} from '../AbstractMessage';
import {Type} from '../Type';
import {Instance} from '../../Model/Instance';
import {Status} from '../../Model/Instance/Status';

export class ListRequest extends AbstractMessage {
  public type: Type = Type.InstanceListRequest;
  public body: Array<Instance>;

  constructor(
      status: Status = Status.Any, namespace: string = '', uuid?: string,
      error?: MessageError) {
    super(new Array<Instance>, uuid, error);
  }
}
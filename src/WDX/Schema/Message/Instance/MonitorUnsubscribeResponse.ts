
/**
 * Elrest eDesign Runtime IPC Typescript Messages Instance
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */

'use strict';

import {MessageError} from '../MessageError';
import {AbstractMessage} from '../AbstractMessage';
import {Type} from '../Type';

export class MonitorUnsubscribeResponse extends AbstractMessage {
  public type: Type = Type.InstanceMonitorUnsubscribeResponse;

  public body: string;

  constructor(id: string, uuid?: string, error?: MessageError) {
    super(id, uuid, error);
  }
}
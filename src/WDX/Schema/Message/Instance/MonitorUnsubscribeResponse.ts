
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

export class MonitorUnsubscribeResponse extends AbstractMessage {
  public type: Type = Type.InstanceMonitorUnsubscribeResponse;

  declare public body: Instance;
}
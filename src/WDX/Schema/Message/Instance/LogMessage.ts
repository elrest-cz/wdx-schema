/**
 * Elrest eDesign Runtime IPC Typescript Messages Instance
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */

'use strict';

import {AbstractMessage} from '../AbstractMessage';
import {Type} from '../Type';
import {Log} from '../../Model/Instance/Log';

export class LogMessage extends AbstractMessage {
  public type: Type = Type.InstanceLog;

  public body: string;
}
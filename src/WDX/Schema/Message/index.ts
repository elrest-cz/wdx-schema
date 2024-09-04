/**
 * Elrest eDesign Runtime IPC Typescript Messages
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import {Type} from './Type';
import {AbstractMessage} from './AbstractMessage';
import {KeepAlive} from './KeepAlive';
import {MessageError} from './MessageError';
import * as Data from './Data';
import * as Instance from './Instance';
import * as Runtime from './Runtime';
import * as Script from './Script';
import * as Trend from './Trend';
import * as Alarm from './Alarm';
import {MESSAGE_SEPARATOR} from './Separator';
import {MESSAGE_SEPARATOR_LENGTH} from './Separator';

export {
  AbstractMessage,
  MessageError,
  KeepAlive,
  Data,
  Instance,
  Type,
  Runtime,
  Script,
  Trend,
  MESSAGE_SEPARATOR,
  MESSAGE_SEPARATOR_LENGTH,
  Alarm,
};
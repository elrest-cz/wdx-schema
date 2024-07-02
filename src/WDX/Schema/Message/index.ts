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
import * as Package from './Package';
import * as Repository from './Repository';
import * as Runtime from './Runtime';
import * as Script from './Script';
import * as Trending from './Trending';
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
  Package,
  Repository,
  Runtime,
  Script,
  Trending,
  MESSAGE_SEPARATOR,
  MESSAGE_SEPARATOR_LENGTH,
  Alarm,
};
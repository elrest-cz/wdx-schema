/**
 * Elrest eDesign Runtime IPC Typescript Messages Data Refresh Schema Request
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import {DataSchema} from '../../Model/Data';
import {MessageError} from '../MessageError';
import {AbstractMessage} from './../AbstractMessage';
import {Type} from './../Type';

export class RefreshSchemaResponse extends AbstractMessage {
  public type: Type = Type.DataRefreshSchemaResponse;

  declare public body: DataSchema;
}
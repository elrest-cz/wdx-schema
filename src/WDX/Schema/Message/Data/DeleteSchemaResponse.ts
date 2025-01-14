/**
 * Elrest eDesign Runtime IPC Typescript Messages Data Delete Schema Response
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import {DataSchema} from '../../Model/Data';
import {MessageError} from '../MessageError';
import {AbstractMessage} from './../AbstractMessage';
import {Type} from './../Type';

export class DeleteSchemaResponse extends AbstractMessage {
  public type: Type = Type.DataDeleteSchemaResponse;
  declare public body: DataSchema;
}
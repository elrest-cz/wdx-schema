/**
 * Elrest eDesign Runtime IPC Typescript Messages Data Set Schema Request
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import {DataSchema} from '../../Model/Data';
import {AbstractMessage} from './../AbstractMessage';
import {Type} from './../Type';

export class SetSchemaRequest extends AbstractMessage {
  public type: Type = Type.DataSetSchemaRequest;

  declare public body: DataSchema;
}

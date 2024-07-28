/**
 * Elrest eDesign Runtime IPC Typescript Messages Data Set Value Request
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import {DataValue} from '../../Model/Data';
import {AbstractMessage} from './../AbstractMessage';
import {Type} from './../Type';

export class SetValueRequest extends AbstractMessage {
  public type: Type = Type.DataSetValueRequest;
  declare public body: DataValue;
}

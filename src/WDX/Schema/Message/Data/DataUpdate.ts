/**
 * Elrest eDesign Runtime IPC Typescript Messages Data Update
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import {AbstractMessage} from './../AbstractMessage';
import {Type} from './../Type';
import {DataValue} from '../../Model/Data';

export class DataUpdate extends AbstractMessage {
  public type: Type = Type.DataUpdate;

  declare public body: DataValue;
}

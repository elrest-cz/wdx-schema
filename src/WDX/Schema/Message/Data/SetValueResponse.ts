/**
 * Elrest eDesign Runtime IPC Typescript Messages Data Set Value Response
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import {DataValue} from '../../Model/Data/DataValue';
import {AbstractMessage} from './../AbstractMessage';
import {Type} from './../Type';


export class SetValueResponse extends AbstractMessage {
  public type: Type = Type.DataSetValueResponse;
  declare public body: DataValue;
}

/**
 * Elrest eDesign Runtime IPC Typescript Messages Data Get Value Response
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import {DataValue} from '../../Model/Data';
import {AbstractMessage} from './../AbstractMessage';
import {Type} from './../Type';


export class GetValueResponse extends AbstractMessage {
  public type: Type = Type.DataGetValueResponse;
  declare public body: DataValue;
}

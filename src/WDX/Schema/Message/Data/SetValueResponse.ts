/**
 * Elrest eDesign Runtime IPC Typescript Messages Data Set Value Response
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import {DataValue} from '../../Model/Data/DataValue';
import {Data} from '../../Model/Data';
import {MessageError} from '../MessageError';
import {AbstractMessage} from './../AbstractMessage';
import {Type} from './../Type';


export class SetValueResponse extends AbstractMessage {
  public type: Type = Type.DataSetValueResponse;
  declare public body: Data;

  constructor(
      path?: string,
      value?: any,
      uuid?: string,
      error?: MessageError,
      from?: string,
  ) {
    super(
        path ? new DataValue(path, value) : undefined,
        uuid,
        error,
        from,
    );
  }
}

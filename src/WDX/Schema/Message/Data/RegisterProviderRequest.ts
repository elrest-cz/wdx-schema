/**
 * Elrest eDesign Runtime IPC Typescript Messages Data Register Provider Request
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import {AbstractMessage} from './../AbstractMessage';
import {Type} from './../Type';
import {DataSchema} from '../../Model/Data';

export class RegisterProviderRequest extends AbstractMessage {
  public type: Type = Type.DataRegisterProviderRequest;

  public body: DataSchema;
}
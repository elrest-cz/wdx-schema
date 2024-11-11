/**
 * Elrest eDesign Runtime IPC Typescript Messages Data Get Schema Request
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import {GetSchemaRequestBody} from '../../Model/Data';
import { AbstractException } from '../../Model/Exception/AbstractException';
import {AbstractMessage} from './../AbstractMessage';
import {Type} from './../Type';

export class GetSchemaRequest extends AbstractMessage {
  public type: Type = Type.DataGetSchemaRequest;

  declare public body: GetSchemaRequestBody;

  constructor(
      path: string, level: number = GetSchemaRequestBody.DEFAULT_LEVEL,
      uuid?: string, error?: AbstractException, from?: string) {
    super(new GetSchemaRequestBody(path, level), uuid, error, from);
  }
}
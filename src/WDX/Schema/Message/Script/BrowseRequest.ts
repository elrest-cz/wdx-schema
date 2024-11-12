/**
 * Elrest eDesign Runtime IPC Typescript Messages Script
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */

'use strict';

import { AbstractException } from '../../Model/Exception/AbstractException';
import {BrowseRequestBody} from '../../Model/Script';
import {AbstractMessage} from './../AbstractMessage';
import {Type} from './../Type';

export class BrowseRequest extends AbstractMessage {
  public type: Type = Type.ScriptBrowseRequest;

  declare public body: BrowseRequestBody;

  constructor(
      path: string, level?: number, uuid?: string, error?: AbstractException) {
    super(new BrowseRequestBody(path, level), uuid, error);
  }
}
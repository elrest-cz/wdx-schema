/**
 * Elrest eDesign Runtime IPC Typescript Messages Data Delete Schema Request
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import {AbstractMessage} from './../AbstractMessage';
import {Type} from './../Type';

export class DeleteSchemaRequest extends AbstractMessage {
  public type: Type = Type.DataDeleteSchemaRequest;

  /**
   * Data schema path
   */
  declare public body: string;
}
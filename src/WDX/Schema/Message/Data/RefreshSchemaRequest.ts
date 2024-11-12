/**
 * Elrest eDesign Runtime IPC Typescript Messages Data Refresh Schema Request
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import {AbstractMessage} from './../AbstractMessage';
import {Type} from './../Type';

export class RefreshSchemaRequest extends AbstractMessage {
  public type: Type = Type.DataRefreshSchemaRequest;

  /**
   * Data schema path
   */
  declare public body: string;
}
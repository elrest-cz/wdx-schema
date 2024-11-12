/**
 * Elrest eDesign Runtime IPC Typescript Messages Data Get Value Response
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import {AbstractMessage} from './../AbstractMessage';
import {Type} from './../Type';


export class GetValueRequest extends AbstractMessage {
  public type: Type = Type.DataGetValueRequest;

  /**
   * Data schema path
   */
  declare public body: string;
}

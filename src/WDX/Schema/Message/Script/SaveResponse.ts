/**
 * Elrest eDesign Runtime IPC Typescript Messages Script
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */

'use strict';

import {Entry} from '../../Model/Filesystem';
import {AbstractMessage} from './../AbstractMessage';
import {Type} from './../Type';


export class SaveResponse extends AbstractMessage {
  public type: Type = Type.ScriptSaveResponse;

  declare public body: Entry;
}
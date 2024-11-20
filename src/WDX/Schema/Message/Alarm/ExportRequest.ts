/**
 * Elrest eDesign Runtime IPC Typescript Messages Data Delete Schema Request
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import {AbstractMessage} from '../AbstractMessage';
import {Type} from '../Type';


export class ExportRequest extends AbstractMessage {
  public type: Type = Type.AlarmingExportRequest;

  /**
   * Alarm - Active flag or undefined.
   */
  declare public body: boolean|undefined;
}
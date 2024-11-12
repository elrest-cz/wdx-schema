/**
 * Elrest eDesign Runtime IPC Typescript Messages Data Delete Schema Request
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import { ExportRequestBody } from '../../Model/Trend/ExportRequestBody';
import {AbstractMessage} from '../AbstractMessage';
import {Type} from '../Type';


export class TrendExportRequest extends AbstractMessage {
  public type: Type = Type.TrendingExportRequest;
  declare public body: ExportRequestBody;
}
/**
 * Elrest eDesign Runtime IPC Typescript Messages Runtime Monitor Subscribe
 * Response
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */

'use strict';

import {AbstractMessage} from './../AbstractMessage';
import {Type} from './../Type';
import * as Model from '../../Model';


export class MonitorSubscribeResponse extends AbstractMessage {
  public type: Type = Type.RuntimeMonitorSubscribeResponse;
  declare public body: Model.Runtime.Report.Report;
}

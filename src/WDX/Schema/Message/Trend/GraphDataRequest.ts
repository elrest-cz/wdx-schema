/**
 * Elrest eDesign Runtime IPC Typescript Messages Data Delete Schema Request
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import {GraphDataRequestBody} from '../../Model/Trend/Graph/GraphDataRequestBody';
import {AbstractMessage} from '../AbstractMessage';
import {Type} from '../Type';


export class GraphDataRequest extends AbstractMessage {
  public type: Type = Type.TrendingGraphDataRequest;
  declare public body: GraphDataRequestBody;
}
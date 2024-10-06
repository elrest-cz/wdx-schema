/**
 * Elrest eDesign Runtime IPC Typescript Messages Data Delete Schema Request
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import {GraphData} from '../../Model/Trend/Graph';
import {AbstractMessage} from '../AbstractMessage';
import {Type} from '../Type';


export class GraphDataResponse extends AbstractMessage {
  public type: Type = Type.TrendingGraphDataResponse;
  declare public body: GraphData;
}
/**
 * Elrest eDesign Runtime IPC Typescript Messages Data Delete Schema Request
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import {Graph} from '../../Model/Trend/Graph/Graph';
import {AbstractMessage} from '../AbstractMessage';
import {Type} from '../Type';


export class GraphConfigurationResponse extends AbstractMessage {
  public type: Type = Type.TrenddingGraphConfigurationResponse;

  declare public body: Graph;
}
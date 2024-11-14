/**
 * Elrest eDesign Runtime IPC Typescript Messages Data Delete Schema Request
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import {AbstractMessage} from '../AbstractMessage';
import {Type} from '../Type';
import {Request} from './../../Model/Pagination/Request';


export class ListRequest extends AbstractMessage {
  public type: Type = Type.TrendingListRequest;
  declare public body: Request;
}
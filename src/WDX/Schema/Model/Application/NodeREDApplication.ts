/**
 * Elrest eDesign Runtime Library Messages Model Instance Application Module
 * Alarming Application
 *
 *
 *
 * @copyright 2024 Elrest AutomationsSysteme GMBH
 */
'use strict';

import {Type} from './Type';
import {AbstractApplication} from './AbstractApplication';
import {ListenOptions} from 'node:net';

export class NodeREDApplication extends AbstractApplication {
  public code: string = Type.NodeREDApplication;

  public nodeREDOptions?: {
    listenOptions?: ListenOptions,
    settings?: any,
  };
}
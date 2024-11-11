/**
 * Elrest eDesign Runtime IPC Typescript Messages Abstract
 *
 * @copyright 2024 Elrest AutomationsSysteme GMBH
 */
'use strict';

import {v4 as uuidv4} from 'uuid';
import {Type} from './Type';
import {Instance} from './../Model/Instance';
import {InstanceOrigin} from '../Model/Instance/InstanceOrigin';
import { AbstractException } from '../Model/Exception/AbstractException';
export abstract class AbstractMessage {
  public abstract type: Type;

  public timestamp: number = Date.now();

  public uuid: string;

  declare public body?: any|null;

  public error?: AbstractException|null;

  public topic?: string;

  public target: Instance|InstanceOrigin|string;

  public origin: Instance|InstanceOrigin;

  constructor(
      body?: any,
      uuid?: string,
      error?: AbstractException,
      topic?: string,
      target?: Instance|InstanceOrigin|string,
      origin?: Instance|InstanceOrigin,
  ) {
    if (body) this.body = body;
    this.uuid = uuid ?? uuidv4();
    if (error) this.error = error;
    this.topic = topic ?? undefined;
    if (target) this.target = target;
    if (origin) this.origin = origin;
  }
}
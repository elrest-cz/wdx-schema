/**
 * Elrest eDesign Runtime IPC Typescript Messages Abstract
 *
 * @copyright 2024 Elrest AutomationsSysteme GMBH
 */
'use strict';

import {v4 as uuidv4} from 'uuid';
import {Type} from './Type';
import {MessageError} from './MessageError';

export abstract class AbstractMessage {
  public abstract type: Type;

  public timestamp: number = Date.now();

  public uuid: string;

  public body?: any|null;

  public error?: MessageError|null;

  public from: string = '';

  public topic: string = '';

  constructor(
      body?: any,
      uuid?: string,
      error?: MessageError,
      from: string = '',
      topic?: string,
  ) {
    if (body) this.body = body;
    this.uuid = uuid ? uuid : uuidv4();
    if (error) this.error = error;
    if (from) this.from = from;
    if (topic) this.topic = topic;
  }
}
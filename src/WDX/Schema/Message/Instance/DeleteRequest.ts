
/**
 * Elrest eDesign Runtime IPC Typescript Messages Instance
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */

'use strict';

import {AbstractMessage} from '../AbstractMessage';
import {Type} from '../Type';

export class DeleteRequest extends AbstractMessage {
    public type: Type = Type.InstanceDeleteRequest;

    /**
     * Instance uuid
     */
    declare public body: string;
  }
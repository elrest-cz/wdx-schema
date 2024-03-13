/**
 * Elrest eDesign Runtime Library Messages Model Instance Application Module
 * BACNet Application
 *
 * @copyright 2024 Elrest AutomationsSysteme GMBH
 */
'use strict';

import {Type} from '../Type';
import {AbstractApplication} from '../AbstractApplication';

export class BACNetDataAdapterApplication extends AbstractApplication {
  public code: string = Type.BACNetDataAdapterApplication;

	apduTimeout?: number;
	interface?: string;
	broadcastAddress?: string;
}
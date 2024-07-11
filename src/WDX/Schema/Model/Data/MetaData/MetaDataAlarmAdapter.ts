/**
 * Elrest eDesign Runtime IPC Typescript Model Data Schema Metadata BACNET
 * 
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import { AlarmOptions } from '../../Instance/AlarmOptions';
import { MetaDataAbstractAdapter } from './MetaDataAbstractAdapter';
import { MetaDataType } from './MetaDataType';

export class MetaDataAlarmAdapter extends MetaDataAbstractAdapter {

	public type: MetaDataType = MetaDataType.ALARM_ADAPTER;

	public alarmOptions:AlarmOptions;
}

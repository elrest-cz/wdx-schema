/**
 * Elrest eDesign Runtime IPC Typescript Model Data Schema MetaData MODBUS
 * Adapter
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import {OPCUAOptions} from '../../Instance/DataAdapter';
import {MetaDataAbstractAdapter} from './MetaDataAbstractAdapter';
import {MetaDataType} from './MetaDataType';

export class MetaDataOPCUAAdapter extends MetaDataAbstractAdapter {
  public type: MetaDataType = MetaDataType.OPCUA_ADAPTER;
  public options: OPCUAOptions;
}

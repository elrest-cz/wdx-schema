/**
 * Elrest eDesign Runtime IPC Typescript Model Data Schema Metadata eWeb
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import {eWebOptions} from '../../Instance/DataAdapter';
import {MetaDataAbstractAdapter} from './MetaDataAbstractAdapter';
import {MetaDataType} from './MetaDataType';

export class MetaDataEWebAdapter extends MetaDataAbstractAdapter {
  public type: MetaDataType = MetaDataType.EWEB_ADAPTER;

  public eWebOptions: eWebOptions;
}

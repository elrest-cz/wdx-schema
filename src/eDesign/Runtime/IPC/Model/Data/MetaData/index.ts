/**
 * Elrest eDesign Runtime IPC Typescript Model Data MetaData Package
 * 
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

export const PATH_SEPARATOR = '.';

import { AbstractMetaData } from './AbstractMetaData';
import { MetaDataAny } from './MetaDataAny';
import { MetaDataStore } from './MetaDataStore';
import { MetaDataBACNET } from './MetaDataBACNET';
import { MetaDataBACNETAdapter } from './MetaDataBACNETAdapter';
import { MetaDataMODBUS } from './MetaDataMODBUS';
import { MetadataMODBUSType } from './MetadataMODBUSType';
import { MetadataMODBUSAdapter } from '././MetaDataMODBUSAdapter';
import { MetaDataEWeb } from './MetaDataEWeb';
import { MetaDataEWebAdapter } from './MetaDataEWebAdapter';
import { MetaDataVirtual } from './MetaDataVirtual';
import { MetaDataVirtualAdapter } from './MetaDataVirtualAdapter';
import { MetaDataCC100IO } from './MetaDataCC100-IO';
import { MetaDataCC100IOAdapter } from './MetaDataCC100-IOAdapter';
import { MetaDataCC100IOType } from './MetaDataCC100-IOType';
import { MetaDataROOT } from './MetaDataROOT';

export {
	AbstractMetaData,
	MetaDataAny,
	MetaDataBACNET,
	MetaDataBACNETAdapter,
	MetaDataMODBUS,
	MetadataMODBUSType,
	MetadataMODBUSAdapter,
	MetaDataEWeb,
	MetaDataEWebAdapter,
	MetaDataStore,
	MetaDataVirtual,
	MetaDataVirtualAdapter,
	MetaDataCC100IO,
	MetaDataCC100IOAdapter,
	MetaDataCC100IOType,
	MetaDataROOT,
};
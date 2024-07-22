/**
 * Elrest eDesign Runtime IPC Typescript Model Data Schema Metadata Provider Abstraction
 * 
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

import { AbstractMetaData } from './AbstractMetaData';
import { MetaDataType } from './MetaDataType';

export abstract class MetaDataAbstractProvider extends AbstractMetaData {

	public abstract providedType: MetaDataType;

	public abstract providerBasePath: string;

}

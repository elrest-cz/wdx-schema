/**
 * Elrest eDesign Runtime IPC Typescript Model Data Schema MetaData MODBUS Type
 * 
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

export enum MetadataMODBUSType {

	/**
	 * Unsigned Integer 16 - Big Endian
	 */
	UINT16_BE = 'UINT16_BE',

	/**
	 * Unsigned Integer 16 Little Endian
	 */
	UINT16_LE = 'UINT16_LE',

	/**
	 * Signed Integer 16 - Big Endian
	 */
	INT16_BE = 'INT16_BE',

	/**
	 * Signed Integer 16 - Little Endian
	 */
	INT16_LE = 'INT16_LE',

	/**
	 * Float 32 - Big Endian
	 */
	FLOAT32_BE = 'FLOAT32_BE',

	/**
	 * Float 32 - Big Endian - Reversed
	 */
	FLOAT32_BE_RE = 'FLOAT32_BE_RE',

	/**
	 * Float 32 - Little Endian
	 */
	FLOAT32_LE = 'FLOAT32_LE',

	/**
	 * Float 32 - Little Endian - Reversed
	 */
	FLOAT32_LE_RE = 'FLOAT32_LE_RE',

	/**
	 * String - Little Endian
	 */
	STRING_LE = 'STRING_LE',

	/**
	 * String - Little Endian - Reversed
	 */
	STRING_LE_RE = 'STRING_LE_RE',

}
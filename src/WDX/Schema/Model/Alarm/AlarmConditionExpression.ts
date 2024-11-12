/**
 * Elrest eDesign Runtime IPC Typescript Model Data Schema
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

export enum AlarmConditionExpression {
  EQUALS = 'EQUALS',
  NOT_EQUALS = 'NOT_EQUALS',
  LESS = 'LESS',
  LESS_EQUAL = 'LESS_EQUAL',
  GREATER = 'GREATER',
  GREATER_EQUAL = 'GREATER_EQUAL',
  REGEXP = 'REGEXP',
  IS_EMPTY = 'IS_EMPTY',
  IS_NOT_EMPTY = 'IS_NOT_EMPTY',
}
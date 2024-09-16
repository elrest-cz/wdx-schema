/**
 * Elrest eDesign Runtime Adapter Store Model Data Schema
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

export enum AlarmType {

  INFO_WITH_ACK = 'info-ack',

  INFO_WITHOUT_ACK = 'info-no-ack',

  INFO_GONE_WITH_ACK = 'info-gone-with-ack',

  WARNING_WITH_ACK = 'warning-ack',

  WARNING_WITHOUT_ACK = 'warning-no-ack',

  WARNING_GONE_WITH_ACK = 'warning-gone-with-ack',

  ERROR_WITH_ACK = 'error-ack',

  ERROR_WITHOUT_ACK = 'error-no-ack',

  ERROR_GONE_WITH_ACK = 'error-gone-with-ack',


}
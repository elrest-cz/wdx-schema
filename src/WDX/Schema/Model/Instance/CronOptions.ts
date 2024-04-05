/**
 * Elrest eDesign Runtime IPC Typescript Model Instance Execution Mode
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

export class CronOptions {
  constructor(

      /**
       * Seconds 0-59
       */
      public seconds: string,

      public minutes: string,

      public hours: string,

      public dayOfTHeMonth: string,

      public month: string,

      public dayOfTheWeek: string,

      public year: string,
  ) {}
}
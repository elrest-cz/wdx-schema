/**
 * Elrest eDesign Runtime IPC Typescript Messages Error
 *
 * @copyright 2024 Elrest AutomationsSysteme GMBH
 */
'use strict';

export class MessageError {
  public code: number;
  public message: string;
  public stack: string;

  constructor(
      error: any,
  ) {
    this.code = error.code ?? 500;
    this.message = error.message ?? error;
    this.stack = error.stack;
  }
}

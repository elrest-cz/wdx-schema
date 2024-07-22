/**
 * Elrest eDesign Runtime IPC Typescript Model Instance Execution Mode
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

export class BACNetOptions {
  public apduTimeout: number = 1000;
  public port: number = 47808;
  public interface: string = '0.0.0.0';
  public broadcastAddress: string;
}
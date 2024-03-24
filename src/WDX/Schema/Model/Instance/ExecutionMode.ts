/**
 * Elrest eDesign Runtime IPC Typescript Model Instance Execution Mode
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

export enum ExecutionMode {
  // thread = 'thread',
  // threadCluster = 'threadCluster',
  spawn = 'spawn',
  // spawnCluster = 'spawn',
  // docker = 'docker',
  // libvirt = 'libvirt',
  worker = 'worker',
}
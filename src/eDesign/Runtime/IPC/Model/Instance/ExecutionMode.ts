/**
 * Elrest eDesign Runtime IPC Typescript Model Instance Execution Mode
 * 
 * @copyright 2024 Elrest Automations Systeme GMBH
 */
'use strict';

export enum ExecutionMode {
	fork = 'fork',
	cluster = 'cluster',
	docker = 'docker'
}
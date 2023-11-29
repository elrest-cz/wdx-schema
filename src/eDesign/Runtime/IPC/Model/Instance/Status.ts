/**
 * Elrest eDesign Runtime IPC Typescript Model Instance Status
 * 
 * @copyright 2023 Elrest Automations Systeme GMBH
 */
'use strict';

export enum Status {
	Online = 'online',
	Starting = 'starting',
	Stopping = 'stopping',
	Offline = 'stopped',
	Error = 'errored',
	Any = ''
}

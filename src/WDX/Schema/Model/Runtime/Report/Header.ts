/**
 * Elrest eDesign Runtime IPC Typescript Model Runtime
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */

'use strict';

import {NetworkInterface} from './NetworkInterface';
import {CPU} from './CPU';


export class Header {
  constructor(
      public reportVersion: number,
      public event: string,
      public trigger: string,
      public filename: string,
      public dumpEventTime: string,
      public dumpEventTimeStamp: string,
      public processId: number,
      public threadId: number,
      public cwd: string,
      public commandLine: Array<string>,
      public nodejsVersion: string,
      public glibcVersionRuntime: string,
      public glibcVersionCompiler: string,
      public wordSize: string,
      public arch: string,
      public platform: string,
      public componentVersions: {[key: string]: string;},
      public release: {name: string},
      public osName: string,
      public osRelease: string,
      public osVersion: string,
      public osMachine: string,
      public cpus: Array<CPU>,
      public networkInterfaces: Array<NetworkInterface>,
      public host: string,

  ) {}
}

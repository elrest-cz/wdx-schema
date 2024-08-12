/**
 * Elrest eDesign Runtime IPC Typescript Model Runtime
 *
 * @copyright 2024 Elrest Automations Systeme GMBH
 */

'use strict';

import { InstanceMonitor } from '../../Instance';
import {Instance} from '../../Instance/Instance';
import {Header} from './Header';
import {JavascriptHeap} from './JavascriptHeap';
import {JavascriptStack} from './JavascriptStack';
import {NativeStack} from './NativeStack';
import {ResourceUsage} from './ResourceUsage';
import {UvthreadResourceUsage} from './UvthreadResourceUsage';

export class Report {
  public instances: InstanceMonitor[] = [];
  constructor(
      public header: Header,
      public javascriptStack: JavascriptStack,
      public nativeStack: NativeStack,
      public javascriptHeap: JavascriptHeap,
      public resourceUsage: ResourceUsage,
      public uvthreadResourceUsage: UvthreadResourceUsage,
      public libuv: Array<any>,
      public workers: Array<any>,
      public environmentVariables: {[key: string]: string;},
      public userLimits: any,
      public sharedObjects: Array<string>,
  ) {}
}

[@wago/wdx-schema](../README.md) / [Exports](../modules.md) / [WDX](../modules/WDX.md) / [Schema](../modules/WDX.Schema.md) / [Model](../modules/WDX.Schema.Model.md) / [Runtime](../modules/WDX.Schema.Model.Runtime.md) / [Report](../modules/WDX.Schema.Model.Runtime.Report.md) / Header

# Class: Header

[Runtime](../modules/WDX.Schema.Model.Runtime.md).[Report](../modules/WDX.Schema.Model.Runtime.Report.md).Header

## Table of contents

### Constructors

- [constructor](WDX.Schema.Model.Runtime.Report.Header.md#constructor)

### Properties

- [arch](WDX.Schema.Model.Runtime.Report.Header.md#arch)
- [commandLine](WDX.Schema.Model.Runtime.Report.Header.md#commandline)
- [componentVersions](WDX.Schema.Model.Runtime.Report.Header.md#componentversions)
- [cpus](WDX.Schema.Model.Runtime.Report.Header.md#cpus)
- [cwd](WDX.Schema.Model.Runtime.Report.Header.md#cwd)
- [dumpEventTime](WDX.Schema.Model.Runtime.Report.Header.md#dumpeventtime)
- [dumpEventTimeStamp](WDX.Schema.Model.Runtime.Report.Header.md#dumpeventtimestamp)
- [event](WDX.Schema.Model.Runtime.Report.Header.md#event)
- [filename](WDX.Schema.Model.Runtime.Report.Header.md#filename)
- [glibcVersionCompiler](WDX.Schema.Model.Runtime.Report.Header.md#glibcversioncompiler)
- [glibcVersionRuntime](WDX.Schema.Model.Runtime.Report.Header.md#glibcversionruntime)
- [host](WDX.Schema.Model.Runtime.Report.Header.md#host)
- [networkInterfaces](WDX.Schema.Model.Runtime.Report.Header.md#networkinterfaces)
- [nodejsVersion](WDX.Schema.Model.Runtime.Report.Header.md#nodejsversion)
- [osMachine](WDX.Schema.Model.Runtime.Report.Header.md#osmachine)
- [osName](WDX.Schema.Model.Runtime.Report.Header.md#osname)
- [osRelease](WDX.Schema.Model.Runtime.Report.Header.md#osrelease)
- [osVersion](WDX.Schema.Model.Runtime.Report.Header.md#osversion)
- [platform](WDX.Schema.Model.Runtime.Report.Header.md#platform)
- [processId](WDX.Schema.Model.Runtime.Report.Header.md#processid)
- [release](WDX.Schema.Model.Runtime.Report.Header.md#release)
- [reportVersion](WDX.Schema.Model.Runtime.Report.Header.md#reportversion)
- [threadId](WDX.Schema.Model.Runtime.Report.Header.md#threadid)
- [trigger](WDX.Schema.Model.Runtime.Report.Header.md#trigger)
- [wordSize](WDX.Schema.Model.Runtime.Report.Header.md#wordsize)

## Constructors

### constructor

• **new Header**(`reportVersion`, `event`, `trigger`, `filename`, `dumpEventTime`, `dumpEventTimeStamp`, `processId`, `threadId`, `cwd`, `commandLine`, `nodejsVersion`, `glibcVersionRuntime`, `glibcVersionCompiler`, `wordSize`, `arch`, `platform`, `componentVersions`, `release`, `osName`, `osRelease`, `osVersion`, `osMachine`, `cpus`, `networkInterfaces`, `host`): [`Header`](WDX.Schema.Model.Runtime.Report.Header.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `reportVersion` | `number` |
| `event` | `string` |
| `trigger` | `string` |
| `filename` | `string` |
| `dumpEventTime` | `string` |
| `dumpEventTimeStamp` | `string` |
| `processId` | `number` |
| `threadId` | `number` |
| `cwd` | `string` |
| `commandLine` | `string`[] |
| `nodejsVersion` | `string` |
| `glibcVersionRuntime` | `string` |
| `glibcVersionCompiler` | `string` |
| `wordSize` | `string` |
| `arch` | `string` |
| `platform` | `string` |
| `componentVersions` | `Object` |
| `release` | `Object` |
| `release.name` | `string` |
| `osName` | `string` |
| `osRelease` | `string` |
| `osVersion` | `string` |
| `osMachine` | `string` |
| `cpus` | [`CPU`](WDX.Schema.Model.Runtime.Report.CPU.md)[] |
| `networkInterfaces` | [`NetworkInterface`](WDX.Schema.Model.Runtime.Report.NetworkInterface.md)[] |
| `host` | `string` |

#### Returns

[`Header`](WDX.Schema.Model.Runtime.Report.Header.md)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Runtime/Report/Header.ts:14

## Properties

### arch

• **arch**: `string`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Runtime/Report/Header.ts:29

___

### commandLine

• **commandLine**: `string`[]

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Runtime/Report/Header.ts:24

___

### componentVersions

• **componentVersions**: `Object`

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Runtime/Report/Header.ts:31

___

### cpus

• **cpus**: [`CPU`](WDX.Schema.Model.Runtime.Report.CPU.md)[]

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Runtime/Report/Header.ts:37

___

### cwd

• **cwd**: `string`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Runtime/Report/Header.ts:23

___

### dumpEventTime

• **dumpEventTime**: `string`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Runtime/Report/Header.ts:19

___

### dumpEventTimeStamp

• **dumpEventTimeStamp**: `string`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Runtime/Report/Header.ts:20

___

### event

• **event**: `string`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Runtime/Report/Header.ts:16

___

### filename

• **filename**: `string`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Runtime/Report/Header.ts:18

___

### glibcVersionCompiler

• **glibcVersionCompiler**: `string`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Runtime/Report/Header.ts:27

___

### glibcVersionRuntime

• **glibcVersionRuntime**: `string`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Runtime/Report/Header.ts:26

___

### host

• **host**: `string`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Runtime/Report/Header.ts:39

___

### networkInterfaces

• **networkInterfaces**: [`NetworkInterface`](WDX.Schema.Model.Runtime.Report.NetworkInterface.md)[]

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Runtime/Report/Header.ts:38

___

### nodejsVersion

• **nodejsVersion**: `string`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Runtime/Report/Header.ts:25

___

### osMachine

• **osMachine**: `string`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Runtime/Report/Header.ts:36

___

### osName

• **osName**: `string`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Runtime/Report/Header.ts:33

___

### osRelease

• **osRelease**: `string`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Runtime/Report/Header.ts:34

___

### osVersion

• **osVersion**: `string`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Runtime/Report/Header.ts:35

___

### platform

• **platform**: `string`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Runtime/Report/Header.ts:30

___

### processId

• **processId**: `number`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Runtime/Report/Header.ts:21

___

### release

• **release**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Runtime/Report/Header.ts:32

___

### reportVersion

• **reportVersion**: `number`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Runtime/Report/Header.ts:15

___

### threadId

• **threadId**: `number`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Runtime/Report/Header.ts:22

___

### trigger

• **trigger**: `string`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Runtime/Report/Header.ts:17

___

### wordSize

• **wordSize**: `string`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Runtime/Report/Header.ts:28

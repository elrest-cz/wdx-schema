[@wago/wdx-schema](../README.md) / [Exports](../modules.md) / [WDX](../modules/WDX.md) / [Schema](../modules/WDX.Schema.md) / [Model](../modules/WDX.Schema.Model.md) / [Instance](../modules/WDX.Schema.Model.Instance.md) / JSSWorkspaceInstance

# Class: JSSWorkspaceInstance

[Model](../modules/WDX.Schema.Model.md).[Instance](../modules/WDX.Schema.Model.Instance.md).JSSWorkspaceInstance

## Hierarchy

- [`Instance`](WDX.Schema.Model.Instance.Instance.md)

  ↳ **`JSSWorkspaceInstance`**

## Table of contents

### Constructors

- [constructor](WDX.Schema.Model.Instance.JSSWorkspaceInstance.md#constructor)

### Properties

- [code](WDX.Schema.Model.Instance.JSSWorkspaceInstance.md#code)
- [createdDate](WDX.Schema.Model.Instance.JSSWorkspaceInstance.md#createddate)
- [cronOptions](WDX.Schema.Model.Instance.JSSWorkspaceInstance.md#cronoptions)
- [dataSourceOptions](WDX.Schema.Model.Instance.JSSWorkspaceInstance.md#datasourceoptions)
- [enabled](WDX.Schema.Model.Instance.JSSWorkspaceInstance.md#enabled)
- [executionOptions](WDX.Schema.Model.Instance.JSSWorkspaceInstance.md#executionoptions)
- [locale](WDX.Schema.Model.Instance.JSSWorkspaceInstance.md#locale)
- [logOptions](WDX.Schema.Model.Instance.JSSWorkspaceInstance.md#logoptions)
- [name](WDX.Schema.Model.Instance.JSSWorkspaceInstance.md#name)
- [namespace](WDX.Schema.Model.Instance.JSSWorkspaceInstance.md#namespace)
- [parentProcessId](WDX.Schema.Model.Instance.JSSWorkspaceInstance.md#parentprocessid)
- [processId](WDX.Schema.Model.Instance.JSSWorkspaceInstance.md#processid)
- [resourceUsage](WDX.Schema.Model.Instance.JSSWorkspaceInstance.md#resourceusage)
- [restartOptions](WDX.Schema.Model.Instance.JSSWorkspaceInstance.md#restartoptions)
- [status](WDX.Schema.Model.Instance.JSSWorkspaceInstance.md#status)
- [storage](WDX.Schema.Model.Instance.JSSWorkspaceInstance.md#storage)
- [tcpOptions](WDX.Schema.Model.Instance.JSSWorkspaceInstance.md#tcpoptions)
- [threadId](WDX.Schema.Model.Instance.JSSWorkspaceInstance.md#threadid)
- [udpOptions](WDX.Schema.Model.Instance.JSSWorkspaceInstance.md#udpoptions)
- [updatedDate](WDX.Schema.Model.Instance.JSSWorkspaceInstance.md#updateddate)
- [uptime](WDX.Schema.Model.Instance.JSSWorkspaceInstance.md#uptime)
- [uuid](WDX.Schema.Model.Instance.JSSWorkspaceInstance.md#uuid)

## Constructors

### constructor

• **new JSSWorkspaceInstance**(`uuid?`, `name?`, `status?`, `executionOptions?`, `restartOptions?`, `cronOptions?`, `logOptions?`, `enabled?`, `processId?`, `parentProcessId?`, `threadId?`): [`JSSWorkspaceInstance`](WDX.Schema.Model.Instance.JSSWorkspaceInstance.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `uuid` | `string` | `undefined` |
| `name?` | `string` | `undefined` |
| `status` | [`Status`](../enums/WDX.Schema.Model.Instance.Status.md) | `Status.Offline` |
| `executionOptions?` | [`ExecutionOptions`](WDX.Schema.Model.Instance.ExecutionOptions.md) | `undefined` |
| `restartOptions?` | [`RestartOptions`](WDX.Schema.Model.Instance.RestartOptions.md) | `undefined` |
| `cronOptions?` | [`CronOptions`](WDX.Schema.Model.Instance.CronOptions.md) | `undefined` |
| `logOptions?` | [`LogOptions`](WDX.Schema.Model.Instance.LogOptions.md) | `undefined` |
| `enabled?` | `boolean` | `undefined` |
| `processId?` | `number` | `undefined` |
| `parentProcessId?` | `number` | `undefined` |
| `threadId?` | `number` | `undefined` |

#### Returns

[`JSSWorkspaceInstance`](WDX.Schema.Model.Instance.JSSWorkspaceInstance.md)

#### Inherited from

[Instance](WDX.Schema.Model.Instance.Instance.md).[constructor](WDX.Schema.Model.Instance.Instance.md#constructor)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Instance/Instance.ts:45

## Properties

### code

• **code**: `string` = `Type.JSWorkspace`

#### Overrides

[Instance](WDX.Schema.Model.Instance.Instance.md).[code](WDX.Schema.Model.Instance.Instance.md#code)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Instance/JSSWorkspaceInstance.ts:16

___

### createdDate

• **createdDate**: `number`

#### Inherited from

[Instance](WDX.Schema.Model.Instance.Instance.md).[createdDate](WDX.Schema.Model.Instance.Instance.md#createddate)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Instance/Instance.ts:31

___

### cronOptions

• `Optional` **cronOptions**: [`CronOptions`](WDX.Schema.Model.Instance.CronOptions.md)

#### Inherited from

[Instance](WDX.Schema.Model.Instance.Instance.md).[cronOptions](WDX.Schema.Model.Instance.Instance.md#cronoptions)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Instance/Instance.ts:56

___

### dataSourceOptions

• `Optional` **dataSourceOptions**: [`DataSourceOptions`](WDX.Schema.Model.Instance.DataSourceOptions.md)

#### Inherited from

[Instance](WDX.Schema.Model.Instance.Instance.md).[dataSourceOptions](WDX.Schema.Model.Instance.Instance.md#datasourceoptions)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Instance/Instance.ts:29

___

### enabled

• `Optional` **enabled**: `boolean`

#### Inherited from

[Instance](WDX.Schema.Model.Instance.Instance.md).[enabled](WDX.Schema.Model.Instance.Instance.md#enabled)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Instance/Instance.ts:60

___

### executionOptions

• **executionOptions**: [`JSSWorkspaceExecutionOptions`](WDX.Schema.Model.Instance.JSSWorkspaceExecutionOptions.md)

#### Overrides

[Instance](WDX.Schema.Model.Instance.Instance.md).[executionOptions](WDX.Schema.Model.Instance.Instance.md#executionoptions)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Instance/JSSWorkspaceInstance.ts:19

___

### locale

• **locale**: `number`

#### Inherited from

[Instance](WDX.Schema.Model.Instance.Instance.md).[locale](WDX.Schema.Model.Instance.Instance.md#locale)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Instance/Instance.ts:37

___

### logOptions

• **logOptions**: [`LogOptions`](WDX.Schema.Model.Instance.LogOptions.md)

#### Inherited from

[Instance](WDX.Schema.Model.Instance.Instance.md).[logOptions](WDX.Schema.Model.Instance.Instance.md#logoptions)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Instance/Instance.ts:43

___

### name

• `Optional` **name**: `string`

#### Inherited from

[Instance](WDX.Schema.Model.Instance.Instance.md).[name](WDX.Schema.Model.Instance.Instance.md#name)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Instance/Instance.ts:48

___

### namespace

• **namespace**: `string` = `Type.Controller`

#### Overrides

[Instance](WDX.Schema.Model.Instance.Instance.md).[namespace](WDX.Schema.Model.Instance.Instance.md#namespace)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Instance/JSSWorkspaceInstance.ts:17

___

### parentProcessId

• `Optional` **parentProcessId**: `number`

#### Inherited from

[Instance](WDX.Schema.Model.Instance.Instance.md).[parentProcessId](WDX.Schema.Model.Instance.Instance.md#parentprocessid)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Instance/Instance.ts:64

___

### processId

• `Optional` **processId**: `number`

#### Inherited from

[Instance](WDX.Schema.Model.Instance.Instance.md).[processId](WDX.Schema.Model.Instance.Instance.md#processid)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Instance/Instance.ts:62

___

### resourceUsage

• **resourceUsage**: [`ResourceUsage`](WDX.Schema.Model.Instance.ResourceUsage.md)

#### Inherited from

[Instance](WDX.Schema.Model.Instance.Instance.md).[resourceUsage](WDX.Schema.Model.Instance.Instance.md#resourceusage)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Instance/Instance.ts:39

___

### restartOptions

• `Optional` **restartOptions**: [`RestartOptions`](WDX.Schema.Model.Instance.RestartOptions.md)

#### Inherited from

[Instance](WDX.Schema.Model.Instance.Instance.md).[restartOptions](WDX.Schema.Model.Instance.Instance.md#restartoptions)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Instance/Instance.ts:54

___

### status

• **status**: [`Status`](../enums/WDX.Schema.Model.Instance.Status.md) = `Status.Offline`

#### Inherited from

[Instance](WDX.Schema.Model.Instance.Instance.md).[status](WDX.Schema.Model.Instance.Instance.md#status)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Instance/Instance.ts:50

___

### storage

• **storage**: `string` = `'storage'`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Instance/JSSWorkspaceInstance.ts:18

___

### tcpOptions

• `Optional` **tcpOptions**: [`TCPOptions`](WDX.Schema.Model.Instance.TCPOptions.md)

#### Inherited from

[Instance](WDX.Schema.Model.Instance.Instance.md).[tcpOptions](WDX.Schema.Model.Instance.Instance.md#tcpoptions)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Instance/Instance.ts:25

___

### threadId

• `Optional` **threadId**: `number`

#### Inherited from

[Instance](WDX.Schema.Model.Instance.Instance.md).[threadId](WDX.Schema.Model.Instance.Instance.md#threadid)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Instance/Instance.ts:66

___

### udpOptions

• `Optional` **udpOptions**: [`UDPOptions`](WDX.Schema.Model.Instance.UDPOptions.md)

#### Inherited from

[Instance](WDX.Schema.Model.Instance.Instance.md).[udpOptions](WDX.Schema.Model.Instance.Instance.md#udpoptions)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Instance/Instance.ts:27

___

### updatedDate

• **updatedDate**: `number`

#### Inherited from

[Instance](WDX.Schema.Model.Instance.Instance.md).[updatedDate](WDX.Schema.Model.Instance.Instance.md#updateddate)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Instance/Instance.ts:33

___

### uptime

• **uptime**: `number`

#### Inherited from

[Instance](WDX.Schema.Model.Instance.Instance.md).[uptime](WDX.Schema.Model.Instance.Instance.md#uptime)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Instance/Instance.ts:35

___

### uuid

• **uuid**: `string`

#### Inherited from

[Instance](WDX.Schema.Model.Instance.Instance.md).[uuid](WDX.Schema.Model.Instance.Instance.md#uuid)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Instance/Instance.ts:21

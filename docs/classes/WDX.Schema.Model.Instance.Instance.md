[@wago/wdx-schema](../README.md) / [Exports](../modules.md) / [WDX](../modules/WDX.md) / [Schema](../modules/WDX.Schema.md) / [Model](../modules/WDX.Schema.Model.md) / [Instance](../modules/WDX.Schema.Model.Instance.md) / Instance

# Class: Instance

[Model](../modules/WDX.Schema.Model.md).[Instance](../modules/WDX.Schema.Model.Instance.md).Instance

## Hierarchy

- **`Instance`**

  ↳ [`AuthServerInstance`](WDX.Schema.Model.Instance.AuthServerInstance.md)

  ↳ [`APIServerInstance`](WDX.Schema.Model.Instance.APIServerInstance.md)

  ↳ [`MQDataAdapterInstance`](WDX.Schema.Model.Instance.DataAdapter.MQDataAdapterInstance.md)

  ↳ [`BACNetDataAdapterInstance`](WDX.Schema.Model.Instance.DataAdapter.BACNetDataAdapterInstance.md)

  ↳ [`CC100IODataAdapterInstance`](WDX.Schema.Model.Instance.DataAdapter.CC100IODataAdapterInstance.md)

  ↳ [`eWebDataAdapterInstance`](WDX.Schema.Model.Instance.DataAdapter.eWebDataAdapterInstance.md)

  ↳ [`MODBUSDataAdapterInstance`](WDX.Schema.Model.Instance.DataAdapter.MODBUSDataAdapterInstance.md)

  ↳ [`MQTTDataAdapterInstance`](WDX.Schema.Model.Instance.DataAdapter.MQTTDataAdapterInstance.md)

  ↳ [`ORMDataAdapterInstance`](WDX.Schema.Model.Instance.DataAdapter.ORMDataAdapterInstance.md)

  ↳ [`VirtualDataAdapterInstance`](WDX.Schema.Model.Instance.DataAdapter.VirtualDataAdapterInstance.md)

  ↳ [`OPCUADataAdapterInstance`](WDX.Schema.Model.Instance.DataAdapter.OPCUADataAdapterInstance.md)

  ↳ [`NodeREDInstance`](WDX.Schema.Model.Instance.NodeREDInstance.md)

  ↳ [`AlarmInstance`](WDX.Schema.Model.Instance.AlarmInstance.md)

  ↳ [`ControllerInstance`](WDX.Schema.Model.Instance.ControllerInstance.md)

  ↳ [`DataInstance`](WDX.Schema.Model.Instance.DataInstance.md)

  ↳ [`JSSWorkspaceInstance`](WDX.Schema.Model.Instance.JSSWorkspaceInstance.md)

  ↳ [`JSScriptInstance`](WDX.Schema.Model.Instance.JSScriptInstance.md)

  ↳ [`TrendInstance`](WDX.Schema.Model.Instance.TrendInstance.md)

  ↳ [`WebSocketServerInstance`](WDX.Schema.Model.Instance.WebSocketServerInstance.md)

## Table of contents

### Constructors

- [constructor](WDX.Schema.Model.Instance.Instance.md#constructor)

### Properties

- [code](WDX.Schema.Model.Instance.Instance.md#code)
- [createdDate](WDX.Schema.Model.Instance.Instance.md#createddate)
- [cronOptions](WDX.Schema.Model.Instance.Instance.md#cronoptions)
- [dataSourceOptions](WDX.Schema.Model.Instance.Instance.md#datasourceoptions)
- [enabled](WDX.Schema.Model.Instance.Instance.md#enabled)
- [executionOptions](WDX.Schema.Model.Instance.Instance.md#executionoptions)
- [locale](WDX.Schema.Model.Instance.Instance.md#locale)
- [logOptions](WDX.Schema.Model.Instance.Instance.md#logoptions)
- [name](WDX.Schema.Model.Instance.Instance.md#name)
- [namespace](WDX.Schema.Model.Instance.Instance.md#namespace)
- [parentProcessId](WDX.Schema.Model.Instance.Instance.md#parentprocessid)
- [processId](WDX.Schema.Model.Instance.Instance.md#processid)
- [resourceUsage](WDX.Schema.Model.Instance.Instance.md#resourceusage)
- [restartOptions](WDX.Schema.Model.Instance.Instance.md#restartoptions)
- [status](WDX.Schema.Model.Instance.Instance.md#status)
- [tcpOptions](WDX.Schema.Model.Instance.Instance.md#tcpoptions)
- [threadId](WDX.Schema.Model.Instance.Instance.md#threadid)
- [udpOptions](WDX.Schema.Model.Instance.Instance.md#udpoptions)
- [updatedDate](WDX.Schema.Model.Instance.Instance.md#updateddate)
- [uptime](WDX.Schema.Model.Instance.Instance.md#uptime)
- [uuid](WDX.Schema.Model.Instance.Instance.md#uuid)

## Constructors

### constructor

• **new Instance**(`uuid?`, `name?`, `status?`, `executionOptions?`, `restartOptions?`, `cronOptions?`, `logOptions?`, `enabled?`, `processId?`, `parentProcessId?`, `threadId?`): [`Instance`](WDX.Schema.Model.Instance.Instance.md)

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

[`Instance`](WDX.Schema.Model.Instance.Instance.md)

#### Defined in

WDX/Schema/Model/Instance/Instance.ts:45

## Properties

### code

• **code**: `string`

#### Defined in

WDX/Schema/Model/Instance/Instance.ts:23

___

### createdDate

• **createdDate**: `number`

#### Defined in

WDX/Schema/Model/Instance/Instance.ts:31

___

### cronOptions

• `Optional` **cronOptions**: [`CronOptions`](WDX.Schema.Model.Instance.CronOptions.md)

#### Defined in

WDX/Schema/Model/Instance/Instance.ts:56

___

### dataSourceOptions

• `Optional` **dataSourceOptions**: [`DataSourceOptions`](WDX.Schema.Model.Instance.DataSourceOptions.md)

#### Defined in

WDX/Schema/Model/Instance/Instance.ts:29

___

### enabled

• `Optional` **enabled**: `boolean`

#### Defined in

WDX/Schema/Model/Instance/Instance.ts:60

___

### executionOptions

• `Optional` **executionOptions**: [`ExecutionOptions`](WDX.Schema.Model.Instance.ExecutionOptions.md)

#### Defined in

WDX/Schema/Model/Instance/Instance.ts:52

___

### locale

• **locale**: `number`

#### Defined in

WDX/Schema/Model/Instance/Instance.ts:37

___

### logOptions

• **logOptions**: [`LogOptions`](WDX.Schema.Model.Instance.LogOptions.md)

#### Defined in

WDX/Schema/Model/Instance/Instance.ts:43

___

### name

• `Optional` **name**: `string`

#### Defined in

WDX/Schema/Model/Instance/Instance.ts:48

___

### namespace

• **namespace**: `string`

#### Defined in

WDX/Schema/Model/Instance/Instance.ts:41

___

### parentProcessId

• `Optional` **parentProcessId**: `number`

#### Defined in

WDX/Schema/Model/Instance/Instance.ts:64

___

### processId

• `Optional` **processId**: `number`

#### Defined in

WDX/Schema/Model/Instance/Instance.ts:62

___

### resourceUsage

• **resourceUsage**: [`ResourceUsage`](WDX.Schema.Model.Instance.ResourceUsage.md)

#### Defined in

WDX/Schema/Model/Instance/Instance.ts:39

___

### restartOptions

• `Optional` **restartOptions**: [`RestartOptions`](WDX.Schema.Model.Instance.RestartOptions.md)

#### Defined in

WDX/Schema/Model/Instance/Instance.ts:54

___

### status

• **status**: [`Status`](../enums/WDX.Schema.Model.Instance.Status.md) = `Status.Offline`

#### Defined in

WDX/Schema/Model/Instance/Instance.ts:50

___

### tcpOptions

• `Optional` **tcpOptions**: [`TCPOptions`](WDX.Schema.Model.Instance.TCPOptions.md)

#### Defined in

WDX/Schema/Model/Instance/Instance.ts:25

___

### threadId

• `Optional` **threadId**: `number`

#### Defined in

WDX/Schema/Model/Instance/Instance.ts:66

___

### udpOptions

• `Optional` **udpOptions**: [`UDPOptions`](WDX.Schema.Model.Instance.UDPOptions.md)

#### Defined in

WDX/Schema/Model/Instance/Instance.ts:27

___

### updatedDate

• **updatedDate**: `number`

#### Defined in

WDX/Schema/Model/Instance/Instance.ts:33

___

### uptime

• **uptime**: `number`

#### Defined in

WDX/Schema/Model/Instance/Instance.ts:35

___

### uuid

• **uuid**: `string`

#### Defined in

WDX/Schema/Model/Instance/Instance.ts:21

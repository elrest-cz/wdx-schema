[@wago/wdx-schema](../README.md) / [Exports](../modules.md) / [WDX](../modules/WDX.md) / [Schema](../modules/WDX.Schema.md) / [Model](../modules/WDX.Schema.Model.md) / [Instance](../modules/WDX.Schema.Model.Instance.md) / [DataAdapter](../modules/WDX.Schema.Model.Instance.DataAdapter.md) / MQTTDataAdapterExecutionOptions

# Class: MQTTDataAdapterExecutionOptions

[Instance](../modules/WDX.Schema.Model.Instance.md).[DataAdapter](../modules/WDX.Schema.Model.Instance.DataAdapter.md).MQTTDataAdapterExecutionOptions

## Table of contents

### Constructors

- [constructor](WDX.Schema.Model.Instance.DataAdapter.MQTTDataAdapterExecutionOptions.md#constructor)

### Properties

- [mode](WDX.Schema.Model.Instance.DataAdapter.MQTTDataAdapterExecutionOptions.md#mode)
- [options](WDX.Schema.Model.Instance.DataAdapter.MQTTDataAdapterExecutionOptions.md#options)
- [script](WDX.Schema.Model.Instance.DataAdapter.MQTTDataAdapterExecutionOptions.md#script)

## Constructors

### constructor

• **new MQTTDataAdapterExecutionOptions**(): [`MQTTDataAdapterExecutionOptions`](WDX.Schema.Model.Instance.DataAdapter.MQTTDataAdapterExecutionOptions.md)

#### Returns

[`MQTTDataAdapterExecutionOptions`](WDX.Schema.Model.Instance.DataAdapter.MQTTDataAdapterExecutionOptions.md)

## Properties

### mode

• **mode**: [`ExecutionMode`](../enums/WDX.Schema.Model.Instance.ExecutionMode.md) = `ExecutionMode.worker`

#### Defined in

WDX/Schema/Model/Instance/DataAdapter/MQTTDataAdapterExecutionOptions.ts:13

___

### options

• **options**: `SpawnOptions` \| `WorkerOptions`

#### Defined in

WDX/Schema/Model/Instance/DataAdapter/MQTTDataAdapterExecutionOptions.ts:15

___

### script

• **script**: `string` = `'./node_modules/.bin/wdx-mqtt'`

#### Defined in

WDX/Schema/Model/Instance/DataAdapter/MQTTDataAdapterExecutionOptions.ts:14

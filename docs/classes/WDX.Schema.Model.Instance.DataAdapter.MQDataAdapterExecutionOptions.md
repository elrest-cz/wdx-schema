[@wago/wdx-schema](../README.md) / [Exports](../modules.md) / [WDX](../modules/WDX.md) / [Schema](../modules/WDX.Schema.md) / [Model](../modules/WDX.Schema.Model.md) / [Instance](../modules/WDX.Schema.Model.Instance.md) / [DataAdapter](../modules/WDX.Schema.Model.Instance.DataAdapter.md) / MQDataAdapterExecutionOptions

# Class: MQDataAdapterExecutionOptions

[Instance](../modules/WDX.Schema.Model.Instance.md).[DataAdapter](../modules/WDX.Schema.Model.Instance.DataAdapter.md).MQDataAdapterExecutionOptions

## Table of contents

### Constructors

- [constructor](WDX.Schema.Model.Instance.DataAdapter.MQDataAdapterExecutionOptions.md#constructor)

### Properties

- [mode](WDX.Schema.Model.Instance.DataAdapter.MQDataAdapterExecutionOptions.md#mode)
- [options](WDX.Schema.Model.Instance.DataAdapter.MQDataAdapterExecutionOptions.md#options)
- [script](WDX.Schema.Model.Instance.DataAdapter.MQDataAdapterExecutionOptions.md#script)

## Constructors

### constructor

• **new MQDataAdapterExecutionOptions**(): [`MQDataAdapterExecutionOptions`](WDX.Schema.Model.Instance.DataAdapter.MQDataAdapterExecutionOptions.md)

#### Returns

[`MQDataAdapterExecutionOptions`](WDX.Schema.Model.Instance.DataAdapter.MQDataAdapterExecutionOptions.md)

## Properties

### mode

• **mode**: [`ExecutionMode`](../enums/WDX.Schema.Model.Instance.ExecutionMode.md) = `ExecutionMode.worker`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Instance/DataAdapter/MQDataAdapterExecutionOptions.ts:13

___

### options

• **options**: `SpawnOptions` \| `WorkerOptions`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Instance/DataAdapter/MQDataAdapterExecutionOptions.ts:15

___

### script

• **script**: `string` = `'./node_modules/.bin/wdx-mq'`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Instance/DataAdapter/MQDataAdapterExecutionOptions.ts:14

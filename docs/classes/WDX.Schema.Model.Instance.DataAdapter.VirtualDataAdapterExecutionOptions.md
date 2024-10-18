[@wago/wdx-schema](../README.md) / [Exports](../modules.md) / [WDX](../modules/WDX.md) / [Schema](../modules/WDX.Schema.md) / [Model](../modules/WDX.Schema.Model.md) / [Instance](../modules/WDX.Schema.Model.Instance.md) / [DataAdapter](../modules/WDX.Schema.Model.Instance.DataAdapter.md) / VirtualDataAdapterExecutionOptions

# Class: VirtualDataAdapterExecutionOptions

[Instance](../modules/WDX.Schema.Model.Instance.md).[DataAdapter](../modules/WDX.Schema.Model.Instance.DataAdapter.md).VirtualDataAdapterExecutionOptions

## Table of contents

### Constructors

- [constructor](WDX.Schema.Model.Instance.DataAdapter.VirtualDataAdapterExecutionOptions.md#constructor)

### Properties

- [mode](WDX.Schema.Model.Instance.DataAdapter.VirtualDataAdapterExecutionOptions.md#mode)
- [options](WDX.Schema.Model.Instance.DataAdapter.VirtualDataAdapterExecutionOptions.md#options)
- [script](WDX.Schema.Model.Instance.DataAdapter.VirtualDataAdapterExecutionOptions.md#script)

## Constructors

### constructor

• **new VirtualDataAdapterExecutionOptions**(): [`VirtualDataAdapterExecutionOptions`](WDX.Schema.Model.Instance.DataAdapter.VirtualDataAdapterExecutionOptions.md)

#### Returns

[`VirtualDataAdapterExecutionOptions`](WDX.Schema.Model.Instance.DataAdapter.VirtualDataAdapterExecutionOptions.md)

## Properties

### mode

• **mode**: [`ExecutionMode`](../enums/WDX.Schema.Model.Instance.ExecutionMode.md) = `ExecutionMode.worker`

#### Defined in

WDX/Schema/Model/Instance/DataAdapter/VirtualDataAdapterExecutionOptions.ts:12

___

### options

• **options**: `SpawnOptions` \| `WorkerOptions`

#### Defined in

WDX/Schema/Model/Instance/DataAdapter/VirtualDataAdapterExecutionOptions.ts:14

___

### script

• **script**: `string` = `'./node_modules/.bin/wdx-virtual'`

#### Defined in

WDX/Schema/Model/Instance/DataAdapter/VirtualDataAdapterExecutionOptions.ts:13

[@wago/wdx-schema](../README.md) / [Exports](../modules.md) / [WDX](../modules/WDX.md) / [Schema](../modules/WDX.Schema.md) / [Model](../modules/WDX.Schema.Model.md) / [Instance](../modules/WDX.Schema.Model.Instance.md) / [DataAdapter](../modules/WDX.Schema.Model.Instance.DataAdapter.md) / BACNetDataAdapterExecutionOptions

# Class: BACNetDataAdapterExecutionOptions

[Instance](../modules/WDX.Schema.Model.Instance.md).[DataAdapter](../modules/WDX.Schema.Model.Instance.DataAdapter.md).BACNetDataAdapterExecutionOptions

## Table of contents

### Constructors

- [constructor](WDX.Schema.Model.Instance.DataAdapter.BACNetDataAdapterExecutionOptions.md#constructor)

### Properties

- [mode](WDX.Schema.Model.Instance.DataAdapter.BACNetDataAdapterExecutionOptions.md#mode)
- [options](WDX.Schema.Model.Instance.DataAdapter.BACNetDataAdapterExecutionOptions.md#options)
- [script](WDX.Schema.Model.Instance.DataAdapter.BACNetDataAdapterExecutionOptions.md#script)

## Constructors

### constructor

• **new BACNetDataAdapterExecutionOptions**(): [`BACNetDataAdapterExecutionOptions`](WDX.Schema.Model.Instance.DataAdapter.BACNetDataAdapterExecutionOptions.md)

#### Returns

[`BACNetDataAdapterExecutionOptions`](WDX.Schema.Model.Instance.DataAdapter.BACNetDataAdapterExecutionOptions.md)

## Properties

### mode

• **mode**: [`ExecutionMode`](../enums/WDX.Schema.Model.Instance.ExecutionMode.md) = `ExecutionMode.worker`

#### Defined in

WDX/Schema/Model/Instance/DataAdapter/BACNetDataAdapterExecutionOptions.ts:13

___

### options

• **options**: `SpawnOptions` \| `WorkerOptions`

#### Defined in

WDX/Schema/Model/Instance/DataAdapter/BACNetDataAdapterExecutionOptions.ts:15

___

### script

• **script**: `string` = `'./node_modules/.bin/wdx-bacnet'`

#### Defined in

WDX/Schema/Model/Instance/DataAdapter/BACNetDataAdapterExecutionOptions.ts:14

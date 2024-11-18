[@wago/wdx-schema](../README.md) / [Exports](../modules.md) / [WDX](../modules/WDX.md) / [Schema](../modules/WDX.Schema.md) / [Model](../modules/WDX.Schema.Model.md) / [Instance](../modules/WDX.Schema.Model.Instance.md) / [DataAdapter](../modules/WDX.Schema.Model.Instance.DataAdapter.md) / ORMDataAdapterExecutionOptions

# Class: ORMDataAdapterExecutionOptions

[Instance](../modules/WDX.Schema.Model.Instance.md).[DataAdapter](../modules/WDX.Schema.Model.Instance.DataAdapter.md).ORMDataAdapterExecutionOptions

## Table of contents

### Constructors

- [constructor](WDX.Schema.Model.Instance.DataAdapter.ORMDataAdapterExecutionOptions.md#constructor)

### Properties

- [mode](WDX.Schema.Model.Instance.DataAdapter.ORMDataAdapterExecutionOptions.md#mode)
- [options](WDX.Schema.Model.Instance.DataAdapter.ORMDataAdapterExecutionOptions.md#options)
- [script](WDX.Schema.Model.Instance.DataAdapter.ORMDataAdapterExecutionOptions.md#script)

## Constructors

### constructor

• **new ORMDataAdapterExecutionOptions**(): [`ORMDataAdapterExecutionOptions`](WDX.Schema.Model.Instance.DataAdapter.ORMDataAdapterExecutionOptions.md)

#### Returns

[`ORMDataAdapterExecutionOptions`](WDX.Schema.Model.Instance.DataAdapter.ORMDataAdapterExecutionOptions.md)

## Properties

### mode

• **mode**: [`ExecutionMode`](../enums/WDX.Schema.Model.Instance.ExecutionMode.md) = `ExecutionMode.worker`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Instance/DataAdapter/ORMDataAdapterExecutionOptions.ts:13

___

### options

• **options**: `SpawnOptions` \| `WorkerOptions`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Instance/DataAdapter/ORMDataAdapterExecutionOptions.ts:15

___

### script

• **script**: `string` = `'./node_modules/.bin/wdx-orm'`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Instance/DataAdapter/ORMDataAdapterExecutionOptions.ts:14

[@wago/wdx-schema](../README.md) / [Exports](../modules.md) / [WDX](../modules/WDX.md) / [Schema](../modules/WDX.Schema.md) / [Model](../modules/WDX.Schema.Model.md) / [Instance](../modules/WDX.Schema.Model.Instance.md) / [DataAdapter](../modules/WDX.Schema.Model.Instance.DataAdapter.md) / MODBUSDataAdapterExecutionOptions

# Class: MODBUSDataAdapterExecutionOptions

[Instance](../modules/WDX.Schema.Model.Instance.md).[DataAdapter](../modules/WDX.Schema.Model.Instance.DataAdapter.md).MODBUSDataAdapterExecutionOptions

## Table of contents

### Constructors

- [constructor](WDX.Schema.Model.Instance.DataAdapter.MODBUSDataAdapterExecutionOptions.md#constructor)

### Properties

- [mode](WDX.Schema.Model.Instance.DataAdapter.MODBUSDataAdapterExecutionOptions.md#mode)
- [options](WDX.Schema.Model.Instance.DataAdapter.MODBUSDataAdapterExecutionOptions.md#options)
- [script](WDX.Schema.Model.Instance.DataAdapter.MODBUSDataAdapterExecutionOptions.md#script)

## Constructors

### constructor

• **new MODBUSDataAdapterExecutionOptions**(): [`MODBUSDataAdapterExecutionOptions`](WDX.Schema.Model.Instance.DataAdapter.MODBUSDataAdapterExecutionOptions.md)

#### Returns

[`MODBUSDataAdapterExecutionOptions`](WDX.Schema.Model.Instance.DataAdapter.MODBUSDataAdapterExecutionOptions.md)

## Properties

### mode

• **mode**: [`ExecutionMode`](../enums/WDX.Schema.Model.Instance.ExecutionMode.md) = `ExecutionMode.worker`

#### Defined in

WDX/Schema/Model/Instance/DataAdapter/MODBUSDataAdapterExecutionOptions.ts:13

___

### options

• **options**: `SpawnOptions` \| `WorkerOptions`

#### Defined in

WDX/Schema/Model/Instance/DataAdapter/MODBUSDataAdapterExecutionOptions.ts:15

___

### script

• **script**: `string` = `'./node_modules/.bin/wdx-modbus'`

#### Defined in

WDX/Schema/Model/Instance/DataAdapter/MODBUSDataAdapterExecutionOptions.ts:14

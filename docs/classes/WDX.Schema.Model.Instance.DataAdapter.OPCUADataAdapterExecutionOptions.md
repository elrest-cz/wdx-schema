[@wago/wdx-schema](../README.md) / [Exports](../modules.md) / [WDX](../modules/WDX.md) / [Schema](../modules/WDX.Schema.md) / [Model](../modules/WDX.Schema.Model.md) / [Instance](../modules/WDX.Schema.Model.Instance.md) / [DataAdapter](../modules/WDX.Schema.Model.Instance.DataAdapter.md) / OPCUADataAdapterExecutionOptions

# Class: OPCUADataAdapterExecutionOptions

[Instance](../modules/WDX.Schema.Model.Instance.md).[DataAdapter](../modules/WDX.Schema.Model.Instance.DataAdapter.md).OPCUADataAdapterExecutionOptions

## Table of contents

### Constructors

- [constructor](WDX.Schema.Model.Instance.DataAdapter.OPCUADataAdapterExecutionOptions.md#constructor)

### Properties

- [mode](WDX.Schema.Model.Instance.DataAdapter.OPCUADataAdapterExecutionOptions.md#mode)
- [options](WDX.Schema.Model.Instance.DataAdapter.OPCUADataAdapterExecutionOptions.md#options)
- [script](WDX.Schema.Model.Instance.DataAdapter.OPCUADataAdapterExecutionOptions.md#script)

## Constructors

### constructor

• **new OPCUADataAdapterExecutionOptions**(): [`OPCUADataAdapterExecutionOptions`](WDX.Schema.Model.Instance.DataAdapter.OPCUADataAdapterExecutionOptions.md)

#### Returns

[`OPCUADataAdapterExecutionOptions`](WDX.Schema.Model.Instance.DataAdapter.OPCUADataAdapterExecutionOptions.md)

## Properties

### mode

• **mode**: [`ExecutionMode`](../enums/WDX.Schema.Model.Instance.ExecutionMode.md) = `ExecutionMode.worker`

#### Defined in

WDX/Schema/Model/Instance/DataAdapter/OPCUADataAdapterExecutionOptions.ts:13

___

### options

• **options**: `SpawnOptions` \| `WorkerOptions`

#### Defined in

WDX/Schema/Model/Instance/DataAdapter/OPCUADataAdapterExecutionOptions.ts:15

___

### script

• **script**: `string` = `'./node_modules/.bin/wdx-opcua'`

#### Defined in

WDX/Schema/Model/Instance/DataAdapter/OPCUADataAdapterExecutionOptions.ts:14

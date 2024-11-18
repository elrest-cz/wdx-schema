[@wago/wdx-schema](../README.md) / [Exports](../modules.md) / [WDX](../modules/WDX.md) / [Schema](../modules/WDX.Schema.md) / [Model](../modules/WDX.Schema.Model.md) / [Instance](../modules/WDX.Schema.Model.Instance.md) / NodeREDExecutionOptions

# Class: NodeREDExecutionOptions

[Model](../modules/WDX.Schema.Model.md).[Instance](../modules/WDX.Schema.Model.Instance.md).NodeREDExecutionOptions

## Table of contents

### Constructors

- [constructor](WDX.Schema.Model.Instance.NodeREDExecutionOptions.md#constructor)

### Properties

- [mode](WDX.Schema.Model.Instance.NodeREDExecutionOptions.md#mode)
- [options](WDX.Schema.Model.Instance.NodeREDExecutionOptions.md#options)
- [script](WDX.Schema.Model.Instance.NodeREDExecutionOptions.md#script)

## Constructors

### constructor

• **new NodeREDExecutionOptions**(): [`NodeREDExecutionOptions`](WDX.Schema.Model.Instance.NodeREDExecutionOptions.md)

#### Returns

[`NodeREDExecutionOptions`](WDX.Schema.Model.Instance.NodeREDExecutionOptions.md)

## Properties

### mode

• **mode**: [`ExecutionMode`](../enums/WDX.Schema.Model.Instance.ExecutionMode.md) = `ExecutionMode.worker`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Instance/NodeREDExecutionOptions.ts:13

___

### options

• **options**: `SpawnOptions` \| `WorkerOptions`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Instance/NodeREDExecutionOptions.ts:15

___

### script

• **script**: `string` = `'./node_modules/.bin/wdx-node-red'`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Instance/NodeREDExecutionOptions.ts:14

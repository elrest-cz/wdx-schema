[@wago/wdx-schema](../README.md) / [Exports](../modules.md) / [WDX](../modules/WDX.md) / [Schema](../modules/WDX.Schema.md) / [Model](../modules/WDX.Schema.Model.md) / [Instance](../modules/WDX.Schema.Model.Instance.md) / DataExecutionOptions

# Class: DataExecutionOptions

[Model](../modules/WDX.Schema.Model.md).[Instance](../modules/WDX.Schema.Model.Instance.md).DataExecutionOptions

## Table of contents

### Constructors

- [constructor](WDX.Schema.Model.Instance.DataExecutionOptions.md#constructor)

### Properties

- [mode](WDX.Schema.Model.Instance.DataExecutionOptions.md#mode)
- [options](WDX.Schema.Model.Instance.DataExecutionOptions.md#options)
- [script](WDX.Schema.Model.Instance.DataExecutionOptions.md#script)

## Constructors

### constructor

• **new DataExecutionOptions**(): [`DataExecutionOptions`](WDX.Schema.Model.Instance.DataExecutionOptions.md)

#### Returns

[`DataExecutionOptions`](WDX.Schema.Model.Instance.DataExecutionOptions.md)

## Properties

### mode

• **mode**: [`ExecutionMode`](../enums/WDX.Schema.Model.Instance.ExecutionMode.md) = `ExecutionMode.worker`

#### Defined in

WDX/Schema/Model/Instance/DataExecutionOptions.ts:12

___

### options

• **options**: `SpawnOptions` \| `WorkerOptions`

#### Defined in

WDX/Schema/Model/Instance/DataExecutionOptions.ts:14

___

### script

• **script**: `string` = `'./node_modules/.bin/wdx-data'`

#### Defined in

WDX/Schema/Model/Instance/DataExecutionOptions.ts:13

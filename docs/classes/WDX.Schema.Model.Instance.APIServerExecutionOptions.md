[@wago/wdx-schema](../README.md) / [Exports](../modules.md) / [WDX](../modules/WDX.md) / [Schema](../modules/WDX.Schema.md) / [Model](../modules/WDX.Schema.Model.md) / [Instance](../modules/WDX.Schema.Model.Instance.md) / APIServerExecutionOptions

# Class: APIServerExecutionOptions

[Model](../modules/WDX.Schema.Model.md).[Instance](../modules/WDX.Schema.Model.Instance.md).APIServerExecutionOptions

## Table of contents

### Constructors

- [constructor](WDX.Schema.Model.Instance.APIServerExecutionOptions.md#constructor)

### Properties

- [mode](WDX.Schema.Model.Instance.APIServerExecutionOptions.md#mode)
- [options](WDX.Schema.Model.Instance.APIServerExecutionOptions.md#options)
- [script](WDX.Schema.Model.Instance.APIServerExecutionOptions.md#script)

## Constructors

### constructor

• **new APIServerExecutionOptions**(): [`APIServerExecutionOptions`](WDX.Schema.Model.Instance.APIServerExecutionOptions.md)

#### Returns

[`APIServerExecutionOptions`](WDX.Schema.Model.Instance.APIServerExecutionOptions.md)

## Properties

### mode

• **mode**: [`ExecutionMode`](../enums/WDX.Schema.Model.Instance.ExecutionMode.md) = `ExecutionMode.worker`

#### Defined in

WDX/Schema/Model/Instance/APIServerExecutionOptions.ts:13

___

### options

• **options**: `SpawnOptions` \| `WorkerOptions`

#### Defined in

WDX/Schema/Model/Instance/APIServerExecutionOptions.ts:15

___

### script

• **script**: `string` = `'./node_modules/.bin/wdx-api'`

#### Defined in

WDX/Schema/Model/Instance/APIServerExecutionOptions.ts:14

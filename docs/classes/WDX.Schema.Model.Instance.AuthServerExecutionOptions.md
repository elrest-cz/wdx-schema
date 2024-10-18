[@wago/wdx-schema](../README.md) / [Exports](../modules.md) / [WDX](../modules/WDX.md) / [Schema](../modules/WDX.Schema.md) / [Model](../modules/WDX.Schema.Model.md) / [Instance](../modules/WDX.Schema.Model.Instance.md) / AuthServerExecutionOptions

# Class: AuthServerExecutionOptions

[Model](../modules/WDX.Schema.Model.md).[Instance](../modules/WDX.Schema.Model.Instance.md).AuthServerExecutionOptions

## Table of contents

### Constructors

- [constructor](WDX.Schema.Model.Instance.AuthServerExecutionOptions.md#constructor)

### Properties

- [mode](WDX.Schema.Model.Instance.AuthServerExecutionOptions.md#mode)
- [options](WDX.Schema.Model.Instance.AuthServerExecutionOptions.md#options)
- [script](WDX.Schema.Model.Instance.AuthServerExecutionOptions.md#script)

## Constructors

### constructor

• **new AuthServerExecutionOptions**(): [`AuthServerExecutionOptions`](WDX.Schema.Model.Instance.AuthServerExecutionOptions.md)

#### Returns

[`AuthServerExecutionOptions`](WDX.Schema.Model.Instance.AuthServerExecutionOptions.md)

## Properties

### mode

• **mode**: [`ExecutionMode`](../enums/WDX.Schema.Model.Instance.ExecutionMode.md) = `ExecutionMode.worker`

#### Defined in

WDX/Schema/Model/Instance/AuthServerExecutionOptions.ts:13

___

### options

• **options**: `SpawnOptions` \| `WorkerOptions`

#### Defined in

WDX/Schema/Model/Instance/AuthServerExecutionOptions.ts:15

___

### script

• **script**: `string` = `'./node_modules/.bin/wdx-auth'`

#### Defined in

WDX/Schema/Model/Instance/AuthServerExecutionOptions.ts:14

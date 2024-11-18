[@wago/wdx-schema](../README.md) / [Exports](../modules.md) / [WDX](../modules/WDX.md) / [Schema](../modules/WDX.Schema.md) / [Model](../modules/WDX.Schema.Model.md) / [Instance](../modules/WDX.Schema.Model.Instance.md) / AlarmExecutionOptions

# Class: AlarmExecutionOptions

[Model](../modules/WDX.Schema.Model.md).[Instance](../modules/WDX.Schema.Model.Instance.md).AlarmExecutionOptions

## Table of contents

### Constructors

- [constructor](WDX.Schema.Model.Instance.AlarmExecutionOptions.md#constructor)

### Properties

- [mode](WDX.Schema.Model.Instance.AlarmExecutionOptions.md#mode)
- [options](WDX.Schema.Model.Instance.AlarmExecutionOptions.md#options)
- [script](WDX.Schema.Model.Instance.AlarmExecutionOptions.md#script)

## Constructors

### constructor

• **new AlarmExecutionOptions**(): [`AlarmExecutionOptions`](WDX.Schema.Model.Instance.AlarmExecutionOptions.md)

#### Returns

[`AlarmExecutionOptions`](WDX.Schema.Model.Instance.AlarmExecutionOptions.md)

## Properties

### mode

• **mode**: [`ExecutionMode`](../enums/WDX.Schema.Model.Instance.ExecutionMode.md) = `ExecutionMode.worker`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Instance/AlarmExecutionOptions.ts:13

___

### options

• **options**: `SpawnOptions` \| `WorkerOptions`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Instance/AlarmExecutionOptions.ts:15

___

### script

• **script**: `string` = `'./node_modules/.bin/wdx-alarm'`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Instance/AlarmExecutionOptions.ts:14

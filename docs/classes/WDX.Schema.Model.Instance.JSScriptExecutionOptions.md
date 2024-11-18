[@wago/wdx-schema](../README.md) / [Exports](../modules.md) / [WDX](../modules/WDX.md) / [Schema](../modules/WDX.Schema.md) / [Model](../modules/WDX.Schema.Model.md) / [Instance](../modules/WDX.Schema.Model.Instance.md) / JSScriptExecutionOptions

# Class: JSScriptExecutionOptions

[Model](../modules/WDX.Schema.Model.md).[Instance](../modules/WDX.Schema.Model.Instance.md).JSScriptExecutionOptions

## Table of contents

### Constructors

- [constructor](WDX.Schema.Model.Instance.JSScriptExecutionOptions.md#constructor)

### Properties

- [mode](WDX.Schema.Model.Instance.JSScriptExecutionOptions.md#mode)
- [options](WDX.Schema.Model.Instance.JSScriptExecutionOptions.md#options)
- [script](WDX.Schema.Model.Instance.JSScriptExecutionOptions.md#script)

## Constructors

### constructor

• **new JSScriptExecutionOptions**(): [`JSScriptExecutionOptions`](WDX.Schema.Model.Instance.JSScriptExecutionOptions.md)

#### Returns

[`JSScriptExecutionOptions`](WDX.Schema.Model.Instance.JSScriptExecutionOptions.md)

## Properties

### mode

• **mode**: [`ExecutionMode`](../enums/WDX.Schema.Model.Instance.ExecutionMode.md) = `ExecutionMode.worker`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Instance/JSScriptExecutionOptions.ts:12

___

### options

• **options**: `SpawnOptions` \| `WorkerOptions`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Instance/JSScriptExecutionOptions.ts:14

___

### script

• **script**: `string` = `'./node_modules/.bin/wdx-js-script'`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Instance/JSScriptExecutionOptions.ts:13

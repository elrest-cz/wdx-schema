[@wago/wdx-schema](../README.md) / [Exports](../modules.md) / [WDX](../modules/WDX.md) / [Schema](../modules/WDX.Schema.md) / [Model](../modules/WDX.Schema.Model.md) / [Instance](../modules/WDX.Schema.Model.Instance.md) / WebSocketServerExecutionOptions

# Class: WebSocketServerExecutionOptions

[Model](../modules/WDX.Schema.Model.md).[Instance](../modules/WDX.Schema.Model.Instance.md).WebSocketServerExecutionOptions

## Table of contents

### Constructors

- [constructor](WDX.Schema.Model.Instance.WebSocketServerExecutionOptions.md#constructor)

### Properties

- [mode](WDX.Schema.Model.Instance.WebSocketServerExecutionOptions.md#mode)
- [options](WDX.Schema.Model.Instance.WebSocketServerExecutionOptions.md#options)
- [script](WDX.Schema.Model.Instance.WebSocketServerExecutionOptions.md#script)

## Constructors

### constructor

• **new WebSocketServerExecutionOptions**(): [`WebSocketServerExecutionOptions`](WDX.Schema.Model.Instance.WebSocketServerExecutionOptions.md)

#### Returns

[`WebSocketServerExecutionOptions`](WDX.Schema.Model.Instance.WebSocketServerExecutionOptions.md)

## Properties

### mode

• **mode**: [`ExecutionMode`](../enums/WDX.Schema.Model.Instance.ExecutionMode.md) = `ExecutionMode.worker`

#### Defined in

WDX/Schema/Model/Instance/WebSocketServerExecutionOptions.ts:13

___

### options

• **options**: `SpawnOptions` \| `WorkerOptions`

#### Defined in

WDX/Schema/Model/Instance/WebSocketServerExecutionOptions.ts:15

___

### script

• **script**: `string` = `'./node_modules/.bin/wdx-wss'`

#### Defined in

WDX/Schema/Model/Instance/WebSocketServerExecutionOptions.ts:14

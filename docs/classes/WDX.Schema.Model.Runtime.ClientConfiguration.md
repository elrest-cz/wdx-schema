[@wago/wdx-schema](../README.md) / [Exports](../modules.md) / [WDX](../modules/WDX.md) / [Schema](../modules/WDX.Schema.md) / [Model](../modules/WDX.Schema.Model.md) / [Runtime](../modules/WDX.Schema.Model.Runtime.md) / ClientConfiguration

# Class: ClientConfiguration

[Model](../modules/WDX.Schema.Model.md).[Runtime](../modules/WDX.Schema.Model.Runtime.md).ClientConfiguration

## Table of contents

### Constructors

- [constructor](WDX.Schema.Model.Runtime.ClientConfiguration.md#constructor)

### Properties

- [host](WDX.Schema.Model.Runtime.ClientConfiguration.md#host)
- [path](WDX.Schema.Model.Runtime.ClientConfiguration.md#path)
- [port](WDX.Schema.Model.Runtime.ClientConfiguration.md#port)
- [protocol](WDX.Schema.Model.Runtime.ClientConfiguration.md#protocol)

## Constructors

### constructor

• **new ClientConfiguration**(`protocol?`, `host?`, `port?`, `path?`): [`ClientConfiguration`](WDX.Schema.Model.Runtime.ClientConfiguration.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `protocol` | [`ClientProtocol`](../enums/WDX.Schema.Model.Runtime.ClientProtocol.md) | `ClientProtocol.ws` |
| `host` | `string` | `''` |
| `port` | `number` | `82` |
| `path` | `string` | `'/'` |

#### Returns

[`ClientConfiguration`](WDX.Schema.Model.Runtime.ClientConfiguration.md)

#### Defined in

WDX/Schema/Model/Runtime/ClientConfiguration.ts:14

## Properties

### host

• **host**: `string` = `''`

#### Defined in

WDX/Schema/Model/Runtime/ClientConfiguration.ts:16

___

### path

• **path**: `string` = `'/'`

#### Defined in

WDX/Schema/Model/Runtime/ClientConfiguration.ts:18

___

### port

• **port**: `number` = `82`

#### Defined in

WDX/Schema/Model/Runtime/ClientConfiguration.ts:17

___

### protocol

• **protocol**: [`ClientProtocol`](../enums/WDX.Schema.Model.Runtime.ClientProtocol.md) = `ClientProtocol.ws`

#### Defined in

WDX/Schema/Model/Runtime/ClientConfiguration.ts:15

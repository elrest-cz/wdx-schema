[@wago/wdx-schema](../README.md) / [Exports](../modules.md) / [WDX](../modules/WDX.md) / [Schema](../modules/WDX.Schema.md) / [Message](../modules/WDX.Schema.Message.md) / [Data](../modules/WDX.Schema.Message.Data.md) / GetSchemaRequest

# Class: GetSchemaRequest

[Message](../modules/WDX.Schema.Message.md).[Data](../modules/WDX.Schema.Message.Data.md).GetSchemaRequest

## Hierarchy

- [`AbstractMessage`](WDX.Schema.Message.AbstractMessage.md)

  ↳ **`GetSchemaRequest`**

## Table of contents

### Constructors

- [constructor](WDX.Schema.Message.Data.GetSchemaRequest.md#constructor)

### Properties

- [body](WDX.Schema.Message.Data.GetSchemaRequest.md#body)
- [error](WDX.Schema.Message.Data.GetSchemaRequest.md#error)
- [origin](WDX.Schema.Message.Data.GetSchemaRequest.md#origin)
- [target](WDX.Schema.Message.Data.GetSchemaRequest.md#target)
- [timestamp](WDX.Schema.Message.Data.GetSchemaRequest.md#timestamp)
- [topic](WDX.Schema.Message.Data.GetSchemaRequest.md#topic)
- [type](WDX.Schema.Message.Data.GetSchemaRequest.md#type)
- [uuid](WDX.Schema.Message.Data.GetSchemaRequest.md#uuid)

## Constructors

### constructor

• **new GetSchemaRequest**(`path`, `level?`, `uuid?`, `error?`, `from?`): [`GetSchemaRequest`](WDX.Schema.Message.Data.GetSchemaRequest.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `path` | `string` | `undefined` |
| `level` | `number` | `GetSchemaRequestBody.DEFAULT_LEVEL` |
| `uuid?` | `string` | `undefined` |
| `error?` | [`MessageError`](WDX.Schema.Message.MessageError.md) | `undefined` |
| `from?` | `string` | `undefined` |

#### Returns

[`GetSchemaRequest`](WDX.Schema.Message.Data.GetSchemaRequest.md)

#### Overrides

[AbstractMessage](WDX.Schema.Message.AbstractMessage.md).[constructor](WDX.Schema.Message.AbstractMessage.md#constructor)

#### Defined in

WDX/Schema/Message/Data/GetSchemaRequest.ts:18

## Properties

### body

• **body**: [`GetSchemaRequestBody`](WDX.Schema.Model.Data.GetSchemaRequestBody.md)

#### Overrides

[AbstractMessage](WDX.Schema.Message.AbstractMessage.md).[body](WDX.Schema.Message.AbstractMessage.md#body)

#### Defined in

WDX/Schema/Message/Data/GetSchemaRequest.ts:16

___

### error

• `Optional` **error**: [`MessageError`](WDX.Schema.Message.MessageError.md)

#### Inherited from

[AbstractMessage](WDX.Schema.Message.AbstractMessage.md).[error](WDX.Schema.Message.AbstractMessage.md#error)

#### Defined in

WDX/Schema/Message/AbstractMessage.ts:22

___

### origin

• **origin**: [`Instance`](WDX.Schema.Model.Instance.Instance.md) \| [`InstanceOrigin`](WDX.Schema.Model.Instance.InstanceOrigin.md)

#### Inherited from

[AbstractMessage](WDX.Schema.Message.AbstractMessage.md).[origin](WDX.Schema.Message.AbstractMessage.md#origin)

#### Defined in

WDX/Schema/Message/AbstractMessage.ts:28

___

### target

• **target**: `string` \| [`Instance`](WDX.Schema.Model.Instance.Instance.md) \| [`InstanceOrigin`](WDX.Schema.Model.Instance.InstanceOrigin.md)

#### Inherited from

[AbstractMessage](WDX.Schema.Message.AbstractMessage.md).[target](WDX.Schema.Message.AbstractMessage.md#target)

#### Defined in

WDX/Schema/Message/AbstractMessage.ts:26

___

### timestamp

• **timestamp**: `number`

#### Inherited from

[AbstractMessage](WDX.Schema.Message.AbstractMessage.md).[timestamp](WDX.Schema.Message.AbstractMessage.md#timestamp)

#### Defined in

WDX/Schema/Message/AbstractMessage.ts:16

___

### topic

• `Optional` **topic**: `string`

#### Inherited from

[AbstractMessage](WDX.Schema.Message.AbstractMessage.md).[topic](WDX.Schema.Message.AbstractMessage.md#topic)

#### Defined in

WDX/Schema/Message/AbstractMessage.ts:24

___

### type

• **type**: [`Type`](../enums/WDX.Schema.Message.Type.md) = `Type.DataGetSchemaRequest`

#### Overrides

[AbstractMessage](WDX.Schema.Message.AbstractMessage.md).[type](WDX.Schema.Message.AbstractMessage.md#type)

#### Defined in

WDX/Schema/Message/Data/GetSchemaRequest.ts:14

___

### uuid

• **uuid**: `string`

#### Inherited from

[AbstractMessage](WDX.Schema.Message.AbstractMessage.md).[uuid](WDX.Schema.Message.AbstractMessage.md#uuid)

#### Defined in

WDX/Schema/Message/AbstractMessage.ts:18

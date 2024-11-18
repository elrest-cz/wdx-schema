[@wago/wdx-schema](../README.md) / [Exports](../modules.md) / [WDX](../modules/WDX.md) / [Schema](../modules/WDX.Schema.md) / [Message](../modules/WDX.Schema.Message.md) / [Data](../modules/WDX.Schema.Message.Data.md) / RegisterSchemaChangesRequest

# Class: RegisterSchemaChangesRequest

[Message](../modules/WDX.Schema.Message.md).[Data](../modules/WDX.Schema.Message.Data.md).RegisterSchemaChangesRequest

## Hierarchy

- [`AbstractMessage`](WDX.Schema.Message.AbstractMessage.md)

  ↳ **`RegisterSchemaChangesRequest`**

## Table of contents

### Constructors

- [constructor](WDX.Schema.Message.Data.RegisterSchemaChangesRequest.md#constructor)

### Properties

- [body](WDX.Schema.Message.Data.RegisterSchemaChangesRequest.md#body)
- [error](WDX.Schema.Message.Data.RegisterSchemaChangesRequest.md#error)
- [origin](WDX.Schema.Message.Data.RegisterSchemaChangesRequest.md#origin)
- [target](WDX.Schema.Message.Data.RegisterSchemaChangesRequest.md#target)
- [timestamp](WDX.Schema.Message.Data.RegisterSchemaChangesRequest.md#timestamp)
- [topic](WDX.Schema.Message.Data.RegisterSchemaChangesRequest.md#topic)
- [type](WDX.Schema.Message.Data.RegisterSchemaChangesRequest.md#type)
- [uuid](WDX.Schema.Message.Data.RegisterSchemaChangesRequest.md#uuid)

## Constructors

### constructor

• **new RegisterSchemaChangesRequest**(`uuid?`, `error?`, `from?`): [`RegisterSchemaChangesRequest`](WDX.Schema.Message.Data.RegisterSchemaChangesRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `uuid?` | `string` |
| `error?` | [`AbstractException`](WDX.Schema.Model.Exception.AbstractException.md) |
| `from?` | `string` |

#### Returns

[`RegisterSchemaChangesRequest`](WDX.Schema.Message.Data.RegisterSchemaChangesRequest.md)

#### Overrides

[AbstractMessage](WDX.Schema.Message.AbstractMessage.md).[constructor](WDX.Schema.Message.AbstractMessage.md#constructor)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Message/Data/RegisterSchemaChangesRequest.ts:17

## Properties

### body

• **body**: ``null``

#### Overrides

[AbstractMessage](WDX.Schema.Message.AbstractMessage.md).[body](WDX.Schema.Message.AbstractMessage.md#body)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Message/Data/RegisterSchemaChangesRequest.ts:15

___

### error

• `Optional` **error**: [`AbstractException`](WDX.Schema.Model.Exception.AbstractException.md)

#### Inherited from

[AbstractMessage](WDX.Schema.Message.AbstractMessage.md).[error](WDX.Schema.Message.AbstractMessage.md#error)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Message/AbstractMessage.ts:22

___

### origin

• **origin**: [`Instance`](WDX.Schema.Model.Instance.Instance.md) \| [`InstanceOrigin`](WDX.Schema.Model.Instance.InstanceOrigin.md)

#### Inherited from

[AbstractMessage](WDX.Schema.Message.AbstractMessage.md).[origin](WDX.Schema.Message.AbstractMessage.md#origin)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Message/AbstractMessage.ts:28

___

### target

• **target**: `string` \| [`Instance`](WDX.Schema.Model.Instance.Instance.md) \| [`InstanceOrigin`](WDX.Schema.Model.Instance.InstanceOrigin.md)

#### Inherited from

[AbstractMessage](WDX.Schema.Message.AbstractMessage.md).[target](WDX.Schema.Message.AbstractMessage.md#target)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Message/AbstractMessage.ts:26

___

### timestamp

• **timestamp**: `number`

#### Inherited from

[AbstractMessage](WDX.Schema.Message.AbstractMessage.md).[timestamp](WDX.Schema.Message.AbstractMessage.md#timestamp)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Message/AbstractMessage.ts:16

___

### topic

• `Optional` **topic**: `string`

#### Inherited from

[AbstractMessage](WDX.Schema.Message.AbstractMessage.md).[topic](WDX.Schema.Message.AbstractMessage.md#topic)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Message/AbstractMessage.ts:24

___

### type

• **type**: [`Type`](../enums/WDX.Schema.Message.Type.md) = `Type.DataRegisterSchemaChangesRequest`

#### Overrides

[AbstractMessage](WDX.Schema.Message.AbstractMessage.md).[type](WDX.Schema.Message.AbstractMessage.md#type)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Message/Data/RegisterSchemaChangesRequest.ts:14

___

### uuid

• **uuid**: `string`

#### Inherited from

[AbstractMessage](WDX.Schema.Message.AbstractMessage.md).[uuid](WDX.Schema.Message.AbstractMessage.md#uuid)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Message/AbstractMessage.ts:18
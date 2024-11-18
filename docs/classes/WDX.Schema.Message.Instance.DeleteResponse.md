[@wago/wdx-schema](../README.md) / [Exports](../modules.md) / [WDX](../modules/WDX.md) / [Schema](../modules/WDX.Schema.md) / [Message](../modules/WDX.Schema.Message.md) / [Instance](../modules/WDX.Schema.Message.Instance.md) / DeleteResponse

# Class: DeleteResponse

[Message](../modules/WDX.Schema.Message.md).[Instance](../modules/WDX.Schema.Message.Instance.md).DeleteResponse

## Hierarchy

- [`AbstractMessage`](WDX.Schema.Message.AbstractMessage.md)

  ↳ **`DeleteResponse`**

## Table of contents

### Constructors

- [constructor](WDX.Schema.Message.Instance.DeleteResponse.md#constructor)

### Properties

- [body](WDX.Schema.Message.Instance.DeleteResponse.md#body)
- [error](WDX.Schema.Message.Instance.DeleteResponse.md#error)
- [origin](WDX.Schema.Message.Instance.DeleteResponse.md#origin)
- [target](WDX.Schema.Message.Instance.DeleteResponse.md#target)
- [timestamp](WDX.Schema.Message.Instance.DeleteResponse.md#timestamp)
- [topic](WDX.Schema.Message.Instance.DeleteResponse.md#topic)
- [type](WDX.Schema.Message.Instance.DeleteResponse.md#type)
- [uuid](WDX.Schema.Message.Instance.DeleteResponse.md#uuid)

## Constructors

### constructor

• **new DeleteResponse**(`body?`, `uuid?`, `error?`, `topic?`, `target?`, `origin?`): [`DeleteResponse`](WDX.Schema.Message.Instance.DeleteResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `body?` | `any` |
| `uuid?` | `string` |
| `error?` | [`AbstractException`](WDX.Schema.Model.Exception.AbstractException.md) |
| `topic?` | `string` |
| `target?` | `string` \| [`Instance`](WDX.Schema.Model.Instance.Instance.md) \| [`InstanceOrigin`](WDX.Schema.Model.Instance.InstanceOrigin.md) |
| `origin?` | [`Instance`](WDX.Schema.Model.Instance.Instance.md) \| [`InstanceOrigin`](WDX.Schema.Model.Instance.InstanceOrigin.md) |

#### Returns

[`DeleteResponse`](WDX.Schema.Message.Instance.DeleteResponse.md)

#### Inherited from

[AbstractMessage](WDX.Schema.Message.AbstractMessage.md).[constructor](WDX.Schema.Message.AbstractMessage.md#constructor)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Message/AbstractMessage.ts:30

## Properties

### body

• **body**: [`Instance`](WDX.Schema.Model.Instance.Instance.md)

#### Overrides

[AbstractMessage](WDX.Schema.Message.AbstractMessage.md).[body](WDX.Schema.Message.AbstractMessage.md#body)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Message/Instance/DeleteResponse.ts:16

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

• **type**: [`Type`](../enums/WDX.Schema.Message.Type.md) = `Type.InstanceDeleteResponse`

#### Overrides

[AbstractMessage](WDX.Schema.Message.AbstractMessage.md).[type](WDX.Schema.Message.AbstractMessage.md#type)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Message/Instance/DeleteResponse.ts:15

___

### uuid

• **uuid**: `string`

#### Inherited from

[AbstractMessage](WDX.Schema.Message.AbstractMessage.md).[uuid](WDX.Schema.Message.AbstractMessage.md#uuid)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Message/AbstractMessage.ts:18

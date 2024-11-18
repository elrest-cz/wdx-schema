[@wago/wdx-schema](../README.md) / [Exports](../modules.md) / [WDX](../modules/WDX.md) / [Schema](../modules/WDX.Schema.md) / [Message](../modules/WDX.Schema.Message.md) / [Script](../modules/WDX.Schema.Message.Script.md) / BrowseRequest

# Class: BrowseRequest

[Message](../modules/WDX.Schema.Message.md).[Script](../modules/WDX.Schema.Message.Script.md).BrowseRequest

## Hierarchy

- [`AbstractMessage`](WDX.Schema.Message.AbstractMessage.md)

  ↳ **`BrowseRequest`**

## Table of contents

### Constructors

- [constructor](WDX.Schema.Message.Script.BrowseRequest.md#constructor)

### Properties

- [body](WDX.Schema.Message.Script.BrowseRequest.md#body)
- [error](WDX.Schema.Message.Script.BrowseRequest.md#error)
- [origin](WDX.Schema.Message.Script.BrowseRequest.md#origin)
- [target](WDX.Schema.Message.Script.BrowseRequest.md#target)
- [timestamp](WDX.Schema.Message.Script.BrowseRequest.md#timestamp)
- [topic](WDX.Schema.Message.Script.BrowseRequest.md#topic)
- [type](WDX.Schema.Message.Script.BrowseRequest.md#type)
- [uuid](WDX.Schema.Message.Script.BrowseRequest.md#uuid)

## Constructors

### constructor

• **new BrowseRequest**(`path`, `level?`, `uuid?`, `error?`): [`BrowseRequest`](WDX.Schema.Message.Script.BrowseRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `level?` | `number` |
| `uuid?` | `string` |
| `error?` | [`AbstractException`](WDX.Schema.Model.Exception.AbstractException.md) |

#### Returns

[`BrowseRequest`](WDX.Schema.Message.Script.BrowseRequest.md)

#### Overrides

[AbstractMessage](WDX.Schema.Message.AbstractMessage.md).[constructor](WDX.Schema.Message.AbstractMessage.md#constructor)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Message/Script/BrowseRequest.ts:19

## Properties

### body

• **body**: [`BrowseRequestBody`](WDX.Schema.Model.Script.BrowseRequestBody.md)

#### Overrides

[AbstractMessage](WDX.Schema.Message.AbstractMessage.md).[body](WDX.Schema.Message.AbstractMessage.md#body)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Message/Script/BrowseRequest.ts:17

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

• **type**: [`Type`](../enums/WDX.Schema.Message.Type.md) = `Type.ScriptBrowseRequest`

#### Overrides

[AbstractMessage](WDX.Schema.Message.AbstractMessage.md).[type](WDX.Schema.Message.AbstractMessage.md#type)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Message/Script/BrowseRequest.ts:15

___

### uuid

• **uuid**: `string`

#### Inherited from

[AbstractMessage](WDX.Schema.Message.AbstractMessage.md).[uuid](WDX.Schema.Message.AbstractMessage.md#uuid)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Message/AbstractMessage.ts:18

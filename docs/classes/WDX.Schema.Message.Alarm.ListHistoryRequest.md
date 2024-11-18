[@wago/wdx-schema](../README.md) / [Exports](../modules.md) / [WDX](../modules/WDX.md) / [Schema](../modules/WDX.Schema.md) / [Message](../modules/WDX.Schema.Message.md) / [Alarm](../modules/WDX.Schema.Message.Alarm.md) / ListHistoryRequest

# Class: ListHistoryRequest

[Message](../modules/WDX.Schema.Message.md).[Alarm](../modules/WDX.Schema.Message.Alarm.md).ListHistoryRequest

## Hierarchy

- [`AbstractMessage`](WDX.Schema.Message.AbstractMessage.md)

  ↳ **`ListHistoryRequest`**

## Table of contents

### Constructors

- [constructor](WDX.Schema.Message.Alarm.ListHistoryRequest.md#constructor)

### Properties

- [body](WDX.Schema.Message.Alarm.ListHistoryRequest.md#body)
- [error](WDX.Schema.Message.Alarm.ListHistoryRequest.md#error)
- [origin](WDX.Schema.Message.Alarm.ListHistoryRequest.md#origin)
- [target](WDX.Schema.Message.Alarm.ListHistoryRequest.md#target)
- [timestamp](WDX.Schema.Message.Alarm.ListHistoryRequest.md#timestamp)
- [topic](WDX.Schema.Message.Alarm.ListHistoryRequest.md#topic)
- [type](WDX.Schema.Message.Alarm.ListHistoryRequest.md#type)
- [uuid](WDX.Schema.Message.Alarm.ListHistoryRequest.md#uuid)

## Constructors

### constructor

• **new ListHistoryRequest**(`body?`, `uuid?`, `error?`, `topic?`, `target?`, `origin?`): [`ListHistoryRequest`](WDX.Schema.Message.Alarm.ListHistoryRequest.md)

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

[`ListHistoryRequest`](WDX.Schema.Message.Alarm.ListHistoryRequest.md)

#### Inherited from

[AbstractMessage](WDX.Schema.Message.AbstractMessage.md).[constructor](WDX.Schema.Message.AbstractMessage.md#constructor)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Message/AbstractMessage.ts:30

## Properties

### body

• **body**: [`ListHistoryRequestBody`](WDX.Schema.Model.Alarm.ListHistoryRequestBody.md)

Alarm - List History Request Body

#### Overrides

[AbstractMessage](WDX.Schema.Message.AbstractMessage.md).[body](WDX.Schema.Message.AbstractMessage.md#body)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Message/Alarm/ListHistoryRequest.ts:17

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

• **type**: [`Type`](../enums/WDX.Schema.Message.Type.md) = `Type.AlarmingListHistoryRequest`

#### Overrides

[AbstractMessage](WDX.Schema.Message.AbstractMessage.md).[type](WDX.Schema.Message.AbstractMessage.md#type)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Message/Alarm/ListHistoryRequest.ts:12

___

### uuid

• **uuid**: `string`

#### Inherited from

[AbstractMessage](WDX.Schema.Message.AbstractMessage.md).[uuid](WDX.Schema.Message.AbstractMessage.md#uuid)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Message/AbstractMessage.ts:18

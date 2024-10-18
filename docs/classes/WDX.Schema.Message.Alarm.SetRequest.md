[@wago/wdx-schema](../README.md) / [Exports](../modules.md) / [WDX](../modules/WDX.md) / [Schema](../modules/WDX.Schema.md) / [Message](../modules/WDX.Schema.Message.md) / [Alarm](../modules/WDX.Schema.Message.Alarm.md) / SetRequest

# Class: SetRequest

[Message](../modules/WDX.Schema.Message.md).[Alarm](../modules/WDX.Schema.Message.Alarm.md).SetRequest

## Hierarchy

- [`AbstractMessage`](WDX.Schema.Message.AbstractMessage.md)

  ↳ **`SetRequest`**

## Table of contents

### Constructors

- [constructor](WDX.Schema.Message.Alarm.SetRequest.md#constructor)

### Properties

- [body](WDX.Schema.Message.Alarm.SetRequest.md#body)
- [error](WDX.Schema.Message.Alarm.SetRequest.md#error)
- [origin](WDX.Schema.Message.Alarm.SetRequest.md#origin)
- [target](WDX.Schema.Message.Alarm.SetRequest.md#target)
- [timestamp](WDX.Schema.Message.Alarm.SetRequest.md#timestamp)
- [topic](WDX.Schema.Message.Alarm.SetRequest.md#topic)
- [type](WDX.Schema.Message.Alarm.SetRequest.md#type)
- [uuid](WDX.Schema.Message.Alarm.SetRequest.md#uuid)

## Constructors

### constructor

• **new SetRequest**(`body?`, `uuid?`, `error?`, `topic?`, `target?`, `origin?`): [`SetRequest`](WDX.Schema.Message.Alarm.SetRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `body?` | `any` |
| `uuid?` | `string` |
| `error?` | [`MessageError`](WDX.Schema.Message.MessageError.md) |
| `topic?` | `string` |
| `target?` | `string` \| [`Instance`](WDX.Schema.Model.Instance.Instance.md) \| [`InstanceOrigin`](WDX.Schema.Model.Instance.InstanceOrigin.md) |
| `origin?` | [`Instance`](WDX.Schema.Model.Instance.Instance.md) \| [`InstanceOrigin`](WDX.Schema.Model.Instance.InstanceOrigin.md) |

#### Returns

[`SetRequest`](WDX.Schema.Message.Alarm.SetRequest.md)

#### Inherited from

[AbstractMessage](WDX.Schema.Message.AbstractMessage.md).[constructor](WDX.Schema.Message.AbstractMessage.md#constructor)

#### Defined in

WDX/Schema/Message/AbstractMessage.ts:30

## Properties

### body

• **body**: [`Alarm`](WDX.Schema.Model.Alarm.Alarm.md)

#### Overrides

[AbstractMessage](WDX.Schema.Message.AbstractMessage.md).[body](WDX.Schema.Message.AbstractMessage.md#body)

#### Defined in

WDX/Schema/Message/Alarm/SetRequest.ts:15

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

• **type**: [`Type`](../enums/WDX.Schema.Message.Type.md) = `Type.AlarmingSetRequest`

#### Overrides

[AbstractMessage](WDX.Schema.Message.AbstractMessage.md).[type](WDX.Schema.Message.AbstractMessage.md#type)

#### Defined in

WDX/Schema/Message/Alarm/SetRequest.ts:13

___

### uuid

• **uuid**: `string`

#### Inherited from

[AbstractMessage](WDX.Schema.Message.AbstractMessage.md).[uuid](WDX.Schema.Message.AbstractMessage.md#uuid)

#### Defined in

WDX/Schema/Message/AbstractMessage.ts:18

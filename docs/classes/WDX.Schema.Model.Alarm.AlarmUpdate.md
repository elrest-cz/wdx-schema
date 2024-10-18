[@wago/wdx-schema](../README.md) / [Exports](../modules.md) / [WDX](../modules/WDX.md) / [Schema](../modules/WDX.Schema.md) / [Model](../modules/WDX.Schema.Model.md) / [Alarm](../modules/WDX.Schema.Model.Alarm.md) / AlarmUpdate

# Class: AlarmUpdate

[Model](../modules/WDX.Schema.Model.md).[Alarm](../modules/WDX.Schema.Model.Alarm.md).AlarmUpdate

## Table of contents

### Constructors

- [constructor](WDX.Schema.Model.Alarm.AlarmUpdate.md#constructor)

### Properties

- [active](WDX.Schema.Model.Alarm.AlarmUpdate.md#active)
- [cause](WDX.Schema.Model.Alarm.AlarmUpdate.md#cause)
- [conditions](WDX.Schema.Model.Alarm.AlarmUpdate.md#conditions)
- [correction](WDX.Schema.Model.Alarm.AlarmUpdate.md#correction)
- [createDateTime](WDX.Schema.Model.Alarm.AlarmUpdate.md#createdatetime)
- [id](WDX.Schema.Model.Alarm.AlarmUpdate.md#id)
- [message](WDX.Schema.Model.Alarm.AlarmUpdate.md#message)
- [messageOff](WDX.Schema.Model.Alarm.AlarmUpdate.md#messageoff)
- [name](WDX.Schema.Model.Alarm.AlarmUpdate.md#name)
- [number](WDX.Schema.Model.Alarm.AlarmUpdate.md#number)
- [reaction](WDX.Schema.Model.Alarm.AlarmUpdate.md#reaction)
- [status](WDX.Schema.Model.Alarm.AlarmUpdate.md#status)
- [type](WDX.Schema.Model.Alarm.AlarmUpdate.md#type)
- [updatedDateTime](WDX.Schema.Model.Alarm.AlarmUpdate.md#updateddatetime)

## Constructors

### constructor

• **new AlarmUpdate**(`id?`, `name?`, `active?`, `message?`, `messageOff?`, `number?`, `type?`, `status?`, `cause?`, `reaction?`, `correction?`, `createDateTime?`, `updatedDateTime?`, `conditions?`): [`AlarmUpdate`](WDX.Schema.Model.Alarm.AlarmUpdate.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `id?` | `number` | `undefined` |
| `name?` | `string` | `undefined` |
| `active` | `boolean` | `true` |
| `message?` | `string` | `undefined` |
| `messageOff?` | `string` | `undefined` |
| `number?` | `number` | `undefined` |
| `type?` | [`AlarmType`](../enums/WDX.Schema.Model.Alarm.AlarmType.md) | `undefined` |
| `status?` | [`AlarmStatus`](../enums/WDX.Schema.Model.Alarm.AlarmStatus.md) | `undefined` |
| `cause?` | `string` | `undefined` |
| `reaction?` | `string` | `undefined` |
| `correction?` | `string` | `undefined` |
| `createDateTime` | `number` | `undefined` |
| `updatedDateTime` | `number` | `createDateTime` |
| `conditions` | [`AlarmCondition`](WDX.Schema.Model.Alarm.AlarmCondition.md)[] | `undefined` |

#### Returns

[`AlarmUpdate`](WDX.Schema.Model.Alarm.AlarmUpdate.md)

#### Defined in

WDX/Schema/Model/Alarm/AlarmUpdate.ts:13

## Properties

### active

• **active**: `boolean` = `true`

#### Defined in

WDX/Schema/Model/Alarm/AlarmUpdate.ts:16

___

### cause

• `Optional` **cause**: `string`

#### Defined in

WDX/Schema/Model/Alarm/AlarmUpdate.ts:22

___

### conditions

• **conditions**: [`AlarmCondition`](WDX.Schema.Model.Alarm.AlarmCondition.md)[]

#### Defined in

WDX/Schema/Model/Alarm/AlarmUpdate.ts:27

___

### correction

• `Optional` **correction**: `string`

#### Defined in

WDX/Schema/Model/Alarm/AlarmUpdate.ts:24

___

### createDateTime

• **createDateTime**: `number`

#### Defined in

WDX/Schema/Model/Alarm/AlarmUpdate.ts:25

___

### id

• `Optional` **id**: `number`

#### Defined in

WDX/Schema/Model/Alarm/AlarmUpdate.ts:14

___

### message

• `Optional` **message**: `string`

#### Defined in

WDX/Schema/Model/Alarm/AlarmUpdate.ts:17

___

### messageOff

• `Optional` **messageOff**: `string`

#### Defined in

WDX/Schema/Model/Alarm/AlarmUpdate.ts:18

___

### name

• `Optional` **name**: `string`

#### Defined in

WDX/Schema/Model/Alarm/AlarmUpdate.ts:15

___

### number

• `Optional` **number**: `number`

#### Defined in

WDX/Schema/Model/Alarm/AlarmUpdate.ts:19

___

### reaction

• `Optional` **reaction**: `string`

#### Defined in

WDX/Schema/Model/Alarm/AlarmUpdate.ts:23

___

### status

• `Optional` **status**: [`AlarmStatus`](../enums/WDX.Schema.Model.Alarm.AlarmStatus.md)

#### Defined in

WDX/Schema/Model/Alarm/AlarmUpdate.ts:21

___

### type

• `Optional` **type**: [`AlarmType`](../enums/WDX.Schema.Model.Alarm.AlarmType.md)

#### Defined in

WDX/Schema/Model/Alarm/AlarmUpdate.ts:20

___

### updatedDateTime

• **updatedDateTime**: `number` = `createDateTime`

#### Defined in

WDX/Schema/Model/Alarm/AlarmUpdate.ts:26

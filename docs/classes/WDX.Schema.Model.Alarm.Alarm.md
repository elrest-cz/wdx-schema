[@wago/wdx-schema](../README.md) / [Exports](../modules.md) / [WDX](../modules/WDX.md) / [Schema](../modules/WDX.Schema.md) / [Model](../modules/WDX.Schema.Model.md) / [Alarm](../modules/WDX.Schema.Model.Alarm.md) / Alarm

# Class: Alarm

[Model](../modules/WDX.Schema.Model.md).[Alarm](../modules/WDX.Schema.Model.Alarm.md).Alarm

## Table of contents

### Constructors

- [constructor](WDX.Schema.Model.Alarm.Alarm.md#constructor)

### Properties

- [active](WDX.Schema.Model.Alarm.Alarm.md#active)
- [cause](WDX.Schema.Model.Alarm.Alarm.md#cause)
- [conditions](WDX.Schema.Model.Alarm.Alarm.md#conditions)
- [correction](WDX.Schema.Model.Alarm.Alarm.md#correction)
- [createDateTime](WDX.Schema.Model.Alarm.Alarm.md#createdatetime)
- [history](WDX.Schema.Model.Alarm.Alarm.md#history)
- [id](WDX.Schema.Model.Alarm.Alarm.md#id)
- [message](WDX.Schema.Model.Alarm.Alarm.md#message)
- [messageOff](WDX.Schema.Model.Alarm.Alarm.md#messageoff)
- [name](WDX.Schema.Model.Alarm.Alarm.md#name)
- [number](WDX.Schema.Model.Alarm.Alarm.md#number)
- [reaction](WDX.Schema.Model.Alarm.Alarm.md#reaction)
- [status](WDX.Schema.Model.Alarm.Alarm.md#status)
- [type](WDX.Schema.Model.Alarm.Alarm.md#type)
- [updatedDateTime](WDX.Schema.Model.Alarm.Alarm.md#updateddatetime)

## Constructors

### constructor

• **new Alarm**(`id?`, `name?`, `active?`, `message?`, `messageOff?`, `number?`, `type?`, `status?`, `cause?`, `reaction?`, `correction?`, `createDateTime?`, `updatedDateTime?`, `conditions?`, `history?`): [`Alarm`](WDX.Schema.Model.Alarm.Alarm.md)

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
| `conditions` | [`AlarmCondition`](WDX.Schema.Model.Alarm.AlarmCondition.md)[] | `[]` |
| `history` | [`AlarmHistory`](WDX.Schema.Model.Alarm.AlarmHistory.md)[] | `[]` |

#### Returns

[`Alarm`](WDX.Schema.Model.Alarm.Alarm.md)

#### Defined in

WDX/Schema/Model/Alarm/Alarm.ts:14

## Properties

### active

• **active**: `boolean` = `true`

#### Defined in

WDX/Schema/Model/Alarm/Alarm.ts:17

___

### cause

• `Optional` **cause**: `string`

#### Defined in

WDX/Schema/Model/Alarm/Alarm.ts:23

___

### conditions

• **conditions**: [`AlarmCondition`](WDX.Schema.Model.Alarm.AlarmCondition.md)[] = `[]`

#### Defined in

WDX/Schema/Model/Alarm/Alarm.ts:28

___

### correction

• `Optional` **correction**: `string`

#### Defined in

WDX/Schema/Model/Alarm/Alarm.ts:25

___

### createDateTime

• **createDateTime**: `number`

#### Defined in

WDX/Schema/Model/Alarm/Alarm.ts:26

___

### history

• **history**: [`AlarmHistory`](WDX.Schema.Model.Alarm.AlarmHistory.md)[] = `[]`

#### Defined in

WDX/Schema/Model/Alarm/Alarm.ts:29

___

### id

• `Optional` **id**: `number`

#### Defined in

WDX/Schema/Model/Alarm/Alarm.ts:15

___

### message

• `Optional` **message**: `string`

#### Defined in

WDX/Schema/Model/Alarm/Alarm.ts:18

___

### messageOff

• `Optional` **messageOff**: `string`

#### Defined in

WDX/Schema/Model/Alarm/Alarm.ts:19

___

### name

• `Optional` **name**: `string`

#### Defined in

WDX/Schema/Model/Alarm/Alarm.ts:16

___

### number

• `Optional` **number**: `number`

#### Defined in

WDX/Schema/Model/Alarm/Alarm.ts:20

___

### reaction

• `Optional` **reaction**: `string`

#### Defined in

WDX/Schema/Model/Alarm/Alarm.ts:24

___

### status

• `Optional` **status**: [`AlarmStatus`](../enums/WDX.Schema.Model.Alarm.AlarmStatus.md)

#### Defined in

WDX/Schema/Model/Alarm/Alarm.ts:22

___

### type

• `Optional` **type**: [`AlarmType`](../enums/WDX.Schema.Model.Alarm.AlarmType.md)

#### Defined in

WDX/Schema/Model/Alarm/Alarm.ts:21

___

### updatedDateTime

• **updatedDateTime**: `number` = `createDateTime`

#### Defined in

WDX/Schema/Model/Alarm/Alarm.ts:27

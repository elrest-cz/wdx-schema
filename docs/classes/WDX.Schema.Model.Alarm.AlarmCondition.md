[@wago/wdx-schema](../README.md) / [Exports](../modules.md) / [WDX](../modules/WDX.md) / [Schema](../modules/WDX.Schema.md) / [Model](../modules/WDX.Schema.Model.md) / [Alarm](../modules/WDX.Schema.Model.Alarm.md) / AlarmCondition

# Class: AlarmCondition

[Model](../modules/WDX.Schema.Model.md).[Alarm](../modules/WDX.Schema.Model.Alarm.md).AlarmCondition

## Table of contents

### Constructors

- [constructor](WDX.Schema.Model.Alarm.AlarmCondition.md#constructor)

### Properties

- [createDateTime](WDX.Schema.Model.Alarm.AlarmCondition.md#createdatetime)
- [expression](WDX.Schema.Model.Alarm.AlarmCondition.md#expression)
- [id](WDX.Schema.Model.Alarm.AlarmCondition.md#id)
- [path](WDX.Schema.Model.Alarm.AlarmCondition.md#path)
- [updatedDateTime](WDX.Schema.Model.Alarm.AlarmCondition.md#updateddatetime)
- [value](WDX.Schema.Model.Alarm.AlarmCondition.md#value)

## Constructors

### constructor

• **new AlarmCondition**(`id?`, `path?`, `expression?`, `value?`, `createDateTime?`, `updatedDateTime?`): [`AlarmCondition`](WDX.Schema.Model.Alarm.AlarmCondition.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `id?` | `number` | `undefined` |
| `path?` | `string` | `undefined` |
| `expression?` | [`AlarmConditionExpression`](../enums/WDX.Schema.Model.Alarm.AlarmConditionExpression.md) | `undefined` |
| `value?` | `string` | `undefined` |
| `createDateTime` | `number` | `undefined` |
| `updatedDateTime` | `number` | `createDateTime` |

#### Returns

[`AlarmCondition`](WDX.Schema.Model.Alarm.AlarmCondition.md)

#### Defined in

WDX/Schema/Model/Alarm/AlarmCondition.ts:11

## Properties

### createDateTime

• **createDateTime**: `number`

#### Defined in

WDX/Schema/Model/Alarm/AlarmCondition.ts:16

___

### expression

• `Optional` **expression**: [`AlarmConditionExpression`](../enums/WDX.Schema.Model.Alarm.AlarmConditionExpression.md)

#### Defined in

WDX/Schema/Model/Alarm/AlarmCondition.ts:14

___

### id

• `Optional` **id**: `number`

#### Defined in

WDX/Schema/Model/Alarm/AlarmCondition.ts:12

___

### path

• `Optional` **path**: `string`

#### Defined in

WDX/Schema/Model/Alarm/AlarmCondition.ts:13

___

### updatedDateTime

• **updatedDateTime**: `number` = `createDateTime`

#### Defined in

WDX/Schema/Model/Alarm/AlarmCondition.ts:17

___

### value

• `Optional` **value**: `string`

#### Defined in

WDX/Schema/Model/Alarm/AlarmCondition.ts:15

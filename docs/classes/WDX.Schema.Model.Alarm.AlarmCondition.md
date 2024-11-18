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
- [uuid](WDX.Schema.Model.Alarm.AlarmCondition.md#uuid)
- [value](WDX.Schema.Model.Alarm.AlarmCondition.md#value)

## Constructors

### constructor

• **new AlarmCondition**(`path?`, `expression?`, `value?`, `uuid?`, `id?`, `createDateTime?`, `updatedDateTime?`): [`AlarmCondition`](WDX.Schema.Model.Alarm.AlarmCondition.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `path` | `string` | `''` |
| `expression` | [`AlarmConditionExpression`](../enums/WDX.Schema.Model.Alarm.AlarmConditionExpression.md) | `null` |
| `value` | `any` | `undefined` |
| `uuid` | `string` | `undefined` |
| `id?` | `number` | `undefined` |
| `createDateTime` | `number` | `undefined` |
| `updatedDateTime` | `number` | `createDateTime` |

#### Returns

[`AlarmCondition`](WDX.Schema.Model.Alarm.AlarmCondition.md)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Alarm/AlarmCondition.ts:12

## Properties

### createDateTime

• **createDateTime**: `number`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Alarm/AlarmCondition.ts:18

___

### expression

• **expression**: [`AlarmConditionExpression`](../enums/WDX.Schema.Model.Alarm.AlarmConditionExpression.md) = `null`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Alarm/AlarmCondition.ts:14

___

### id

• `Optional` **id**: `number`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Alarm/AlarmCondition.ts:17

___

### path

• **path**: `string` = `''`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Alarm/AlarmCondition.ts:13

___

### updatedDateTime

• **updatedDateTime**: `number` = `createDateTime`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Alarm/AlarmCondition.ts:19

___

### uuid

• **uuid**: `string`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Alarm/AlarmCondition.ts:16

___

### value

• **value**: `any` = `undefined`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Alarm/AlarmCondition.ts:15

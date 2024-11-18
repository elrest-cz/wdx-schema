[@wago/wdx-schema](../README.md) / [Exports](../modules.md) / [WDX](../modules/WDX.md) / [Schema](../modules/WDX.Schema.md) / [Model](../modules/WDX.Schema.Model.md) / [Alarm](../modules/WDX.Schema.Model.Alarm.md) / ListHistoryRequestBody

# Class: ListHistoryRequestBody

[Model](../modules/WDX.Schema.Model.md).[Alarm](../modules/WDX.Schema.Model.Alarm.md).ListHistoryRequestBody

## Hierarchy

- [`Request`](WDX.Schema.Model.Pagination.Request.md)

  ↳ **`ListHistoryRequestBody`**

## Table of contents

### Constructors

- [constructor](WDX.Schema.Model.Alarm.ListHistoryRequestBody.md#constructor)

### Properties

- [alarmCode](WDX.Schema.Model.Alarm.ListHistoryRequestBody.md#alarmcode)
- [limit](WDX.Schema.Model.Alarm.ListHistoryRequestBody.md#limit)
- [offset](WDX.Schema.Model.Alarm.ListHistoryRequestBody.md#offset)
- [DEFAULT\_LIMIT](WDX.Schema.Model.Alarm.ListHistoryRequestBody.md#default_limit)
- [DEFAULT\_NOLIMIT](WDX.Schema.Model.Alarm.ListHistoryRequestBody.md#default_nolimit)
- [DEFAULT\_OFFSET](WDX.Schema.Model.Alarm.ListHistoryRequestBody.md#default_offset)

## Constructors

### constructor

• **new ListHistoryRequestBody**(`alarmCode`, `offset`, `limit`): [`ListHistoryRequestBody`](WDX.Schema.Model.Alarm.ListHistoryRequestBody.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `alarmCode` | `number` |
| `offset` | `number` |
| `limit` | `number` |

#### Returns

[`ListHistoryRequestBody`](WDX.Schema.Model.Alarm.ListHistoryRequestBody.md)

#### Overrides

[Request](WDX.Schema.Model.Pagination.Request.md).[constructor](WDX.Schema.Model.Pagination.Request.md#constructor)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Alarm/ListHistoryRequestBody.ts:11

## Properties

### alarmCode

• **alarmCode**: `number`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Alarm/ListHistoryRequestBody.ts:12

___

### limit

• **limit**: `number`

#### Inherited from

[Request](WDX.Schema.Model.Pagination.Request.md).[limit](WDX.Schema.Model.Pagination.Request.md#limit)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Alarm/ListHistoryRequestBody.ts:14

___

### offset

• **offset**: `number`

#### Inherited from

[Request](WDX.Schema.Model.Pagination.Request.md).[offset](WDX.Schema.Model.Pagination.Request.md#offset)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Alarm/ListHistoryRequestBody.ts:13

___

### DEFAULT\_LIMIT

▪ `Static` `Readonly` **DEFAULT\_LIMIT**: `number` = `20`

#### Inherited from

[Request](WDX.Schema.Model.Pagination.Request.md).[DEFAULT_LIMIT](WDX.Schema.Model.Pagination.Request.md#default_limit)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Pagination/Request.ts:12

___

### DEFAULT\_NOLIMIT

▪ `Static` `Readonly` **DEFAULT\_NOLIMIT**: `number` = `-1`

#### Inherited from

[Request](WDX.Schema.Model.Pagination.Request.md).[DEFAULT_NOLIMIT](WDX.Schema.Model.Pagination.Request.md#default_nolimit)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Pagination/Request.ts:13

___

### DEFAULT\_OFFSET

▪ `Static` `Readonly` **DEFAULT\_OFFSET**: `number` = `0`

#### Inherited from

[Request](WDX.Schema.Model.Pagination.Request.md).[DEFAULT_OFFSET](WDX.Schema.Model.Pagination.Request.md#default_offset)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Pagination/Request.ts:11

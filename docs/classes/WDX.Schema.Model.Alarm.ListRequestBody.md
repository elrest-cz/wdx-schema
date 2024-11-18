[@wago/wdx-schema](../README.md) / [Exports](../modules.md) / [WDX](../modules/WDX.md) / [Schema](../modules/WDX.Schema.md) / [Model](../modules/WDX.Schema.Model.md) / [Alarm](../modules/WDX.Schema.Model.Alarm.md) / ListRequestBody

# Class: ListRequestBody

[Model](../modules/WDX.Schema.Model.md).[Alarm](../modules/WDX.Schema.Model.Alarm.md).ListRequestBody

## Hierarchy

- [`Request`](WDX.Schema.Model.Pagination.Request.md)

  ↳ **`ListRequestBody`**

## Table of contents

### Constructors

- [constructor](WDX.Schema.Model.Alarm.ListRequestBody.md#constructor)

### Properties

- [active](WDX.Schema.Model.Alarm.ListRequestBody.md#active)
- [limit](WDX.Schema.Model.Alarm.ListRequestBody.md#limit)
- [offset](WDX.Schema.Model.Alarm.ListRequestBody.md#offset)
- [DEFAULT\_LIMIT](WDX.Schema.Model.Alarm.ListRequestBody.md#default_limit)
- [DEFAULT\_NOLIMIT](WDX.Schema.Model.Alarm.ListRequestBody.md#default_nolimit)
- [DEFAULT\_OFFSET](WDX.Schema.Model.Alarm.ListRequestBody.md#default_offset)

## Constructors

### constructor

• **new ListRequestBody**(`active`, `offset`, `limit`): [`ListRequestBody`](WDX.Schema.Model.Alarm.ListRequestBody.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `active` | `boolean` |
| `offset` | `number` |
| `limit` | `number` |

#### Returns

[`ListRequestBody`](WDX.Schema.Model.Alarm.ListRequestBody.md)

#### Overrides

[Request](WDX.Schema.Model.Pagination.Request.md).[constructor](WDX.Schema.Model.Pagination.Request.md#constructor)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Alarm/ListRequestBody.ts:11

## Properties

### active

• **active**: `boolean`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Alarm/ListRequestBody.ts:12

___

### limit

• **limit**: `number`

#### Inherited from

[Request](WDX.Schema.Model.Pagination.Request.md).[limit](WDX.Schema.Model.Pagination.Request.md#limit)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Alarm/ListRequestBody.ts:14

___

### offset

• **offset**: `number`

#### Inherited from

[Request](WDX.Schema.Model.Pagination.Request.md).[offset](WDX.Schema.Model.Pagination.Request.md#offset)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Alarm/ListRequestBody.ts:13

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

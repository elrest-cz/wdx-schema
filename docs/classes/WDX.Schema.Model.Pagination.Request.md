[@wago/wdx-schema](../README.md) / [Exports](../modules.md) / [WDX](../modules/WDX.md) / [Schema](../modules/WDX.Schema.md) / [Model](../modules/WDX.Schema.Model.md) / [Pagination](../modules/WDX.Schema.Model.Pagination.md) / Request

# Class: Request

[Model](../modules/WDX.Schema.Model.md).[Pagination](../modules/WDX.Schema.Model.Pagination.md).Request

## Hierarchy

- **`Request`**

  ↳ [`ListRequestBody`](WDX.Schema.Model.Alarm.ListRequestBody.md)

  ↳ [`ListHistoryRequestBody`](WDX.Schema.Model.Alarm.ListHistoryRequestBody.md)

## Table of contents

### Constructors

- [constructor](WDX.Schema.Model.Pagination.Request.md#constructor)

### Properties

- [limit](WDX.Schema.Model.Pagination.Request.md#limit)
- [offset](WDX.Schema.Model.Pagination.Request.md#offset)
- [DEFAULT\_LIMIT](WDX.Schema.Model.Pagination.Request.md#default_limit)
- [DEFAULT\_NOLIMIT](WDX.Schema.Model.Pagination.Request.md#default_nolimit)
- [DEFAULT\_OFFSET](WDX.Schema.Model.Pagination.Request.md#default_offset)

## Constructors

### constructor

• **new Request**(`offset?`, `limit?`): [`Request`](WDX.Schema.Model.Pagination.Request.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `offset` | `number` | `Request.DEFAULT_OFFSET` |
| `limit` | `number` | `Request.DEFAULT_LIMIT` |

#### Returns

[`Request`](WDX.Schema.Model.Pagination.Request.md)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Pagination/Request.ts:15

## Properties

### limit

• **limit**: `number` = `Request.DEFAULT_LIMIT`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Pagination/Request.ts:17

___

### offset

• **offset**: `number` = `Request.DEFAULT_OFFSET`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Pagination/Request.ts:16

___

### DEFAULT\_LIMIT

▪ `Static` `Readonly` **DEFAULT\_LIMIT**: `number` = `20`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Pagination/Request.ts:12

___

### DEFAULT\_NOLIMIT

▪ `Static` `Readonly` **DEFAULT\_NOLIMIT**: `number` = `-1`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Pagination/Request.ts:13

___

### DEFAULT\_OFFSET

▪ `Static` `Readonly` **DEFAULT\_OFFSET**: `number` = `0`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Pagination/Request.ts:11

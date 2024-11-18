[@wago/wdx-schema](../README.md) / [Exports](../modules.md) / [WDX](../modules/WDX.md) / [Schema](../modules/WDX.Schema.md) / [Model](../modules/WDX.Schema.Model.md) / [Instance](../modules/WDX.Schema.Model.Instance.md) / Log

# Class: Log

[Model](../modules/WDX.Schema.Model.md).[Instance](../modules/WDX.Schema.Model.Instance.md).Log

## Table of contents

### Constructors

- [constructor](WDX.Schema.Model.Instance.Log.md#constructor)

### Properties

- [channel](WDX.Schema.Model.Instance.Log.md#channel)
- [date](WDX.Schema.Model.Instance.Log.md#date)
- [instanceUuid](WDX.Schema.Model.Instance.Log.md#instanceuuid)
- [level](WDX.Schema.Model.Instance.Log.md#level)
- [messsage](WDX.Schema.Model.Instance.Log.md#messsage)
- [title](WDX.Schema.Model.Instance.Log.md#title)

## Constructors

### constructor

• **new Log**(`level`, `date`, `channel`, `title`, `messsage`, `instanceUuid?`): [`Log`](WDX.Schema.Model.Instance.Log.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `level` | [`LogLevel`](../enums/WDX.Schema.Model.Instance.LogLevel.md) | `undefined` |
| `date` | [`LogDate`](WDX.Schema.Model.Instance.LogDate.md) | `undefined` |
| `channel` | `string` | `undefined` |
| `title` | `string` | `undefined` |
| `messsage` | `any` | `undefined` |
| `instanceUuid` | `string` | `''` |

#### Returns

[`Log`](WDX.Schema.Model.Instance.Log.md)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Instance/Log.ts:11

## Properties

### channel

• **channel**: `string`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Instance/Log.ts:14

___

### date

• **date**: [`LogDate`](WDX.Schema.Model.Instance.LogDate.md)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Instance/Log.ts:13

___

### instanceUuid

• **instanceUuid**: `string` = `''`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Instance/Log.ts:17

___

### level

• **level**: [`LogLevel`](../enums/WDX.Schema.Model.Instance.LogLevel.md)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Instance/Log.ts:12

___

### messsage

• **messsage**: `any`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Instance/Log.ts:16

___

### title

• **title**: `string`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Instance/Log.ts:15

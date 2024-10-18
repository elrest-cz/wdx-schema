[@wago/wdx-schema](../README.md) / [Exports](../modules.md) / [WDX](../modules/WDX.md) / [Schema](../modules/WDX.Schema.md) / [Model](../modules/WDX.Schema.Model.md) / [Data](../modules/WDX.Schema.Model.Data.md) / DataSchema

# Class: DataSchema

[Model](../modules/WDX.Schema.Model.md).[Data](../modules/WDX.Schema.Model.Data.md).DataSchema

## Table of contents

### Constructors

- [constructor](WDX.Schema.Model.Data.DataSchema.md#constructor)

### Properties

- [children](WDX.Schema.Model.Data.DataSchema.md#children)
- [createdTimestamp](WDX.Schema.Model.Data.DataSchema.md#createdtimestamp)
- [editable](WDX.Schema.Model.Data.DataSchema.md#editable)
- [extendable](WDX.Schema.Model.Data.DataSchema.md#extendable)
- [metadata](WDX.Schema.Model.Data.DataSchema.md#metadata)
- [name](WDX.Schema.Model.Data.DataSchema.md#name)
- [path](WDX.Schema.Model.Data.DataSchema.md#path)
- [readonly](WDX.Schema.Model.Data.DataSchema.md#readonly)
- [refreshable](WDX.Schema.Model.Data.DataSchema.md#refreshable)
- [relativePath](WDX.Schema.Model.Data.DataSchema.md#relativepath)
- [removable](WDX.Schema.Model.Data.DataSchema.md#removable)
- [subscribeable](WDX.Schema.Model.Data.DataSchema.md#subscribeable)
- [updateTimestamp](WDX.Schema.Model.Data.DataSchema.md#updatetimestamp)
- [uuid](WDX.Schema.Model.Data.DataSchema.md#uuid)

## Constructors

### constructor

• **new DataSchema**(`path?`, `relativePath?`, `name?`, `children`, `metadata`, `readonly?`, `subscribeable?`, `editable?`, `extendable?`, `removable?`, `refreshable?`, `uuid?`): [`DataSchema`](WDX.Schema.Model.Data.DataSchema.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `path` | `string` | `''` |
| `relativePath` | `string` | `''` |
| `name` | `string` | `''` |
| `children` | [`DataSchema`](WDX.Schema.Model.Data.DataSchema.md)[] | `undefined` |
| `metadata` | [`AbstractMetaData`](WDX.Schema.Model.Data.MetaData.AbstractMetaData.md) | `undefined` |
| `readonly` | `boolean` | `false` |
| `subscribeable` | `boolean` | `false` |
| `editable` | `boolean` | `false` |
| `extendable` | `boolean` | `false` |
| `removable` | `boolean` | `true` |
| `refreshable` | `boolean` | `false` |
| `uuid` | `string` | `undefined` |

#### Returns

[`DataSchema`](WDX.Schema.Model.Data.DataSchema.md)

#### Defined in

WDX/Schema/Model/Data/DataSchema.ts:16

## Properties

### children

• **children**: [`DataSchema`](WDX.Schema.Model.Data.DataSchema.md)[]

#### Defined in

WDX/Schema/Model/Data/DataSchema.ts:20

___

### createdTimestamp

• **createdTimestamp**: `number`

#### Defined in

WDX/Schema/Model/Data/DataSchema.ts:12

___

### editable

• **editable**: `boolean` = `false`

#### Defined in

WDX/Schema/Model/Data/DataSchema.ts:24

___

### extendable

• **extendable**: `boolean` = `false`

#### Defined in

WDX/Schema/Model/Data/DataSchema.ts:25

___

### metadata

• **metadata**: [`AbstractMetaData`](WDX.Schema.Model.Data.MetaData.AbstractMetaData.md)

#### Defined in

WDX/Schema/Model/Data/DataSchema.ts:21

___

### name

• **name**: `string` = `''`

#### Defined in

WDX/Schema/Model/Data/DataSchema.ts:19

___

### path

• **path**: `string` = `''`

#### Defined in

WDX/Schema/Model/Data/DataSchema.ts:17

___

### readonly

• **readonly**: `boolean` = `false`

#### Defined in

WDX/Schema/Model/Data/DataSchema.ts:22

___

### refreshable

• **refreshable**: `boolean` = `false`

#### Defined in

WDX/Schema/Model/Data/DataSchema.ts:27

___

### relativePath

• **relativePath**: `string` = `''`

#### Defined in

WDX/Schema/Model/Data/DataSchema.ts:18

___

### removable

• **removable**: `boolean` = `true`

#### Defined in

WDX/Schema/Model/Data/DataSchema.ts:26

___

### subscribeable

• **subscribeable**: `boolean` = `false`

#### Defined in

WDX/Schema/Model/Data/DataSchema.ts:23

___

### updateTimestamp

• **updateTimestamp**: `number`

#### Defined in

WDX/Schema/Model/Data/DataSchema.ts:14

___

### uuid

• **uuid**: `string`

#### Defined in

WDX/Schema/Model/Data/DataSchema.ts:28

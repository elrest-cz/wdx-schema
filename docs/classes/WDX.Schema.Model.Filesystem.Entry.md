[@wago/wdx-schema](../README.md) / [Exports](../modules.md) / [WDX](../modules/WDX.md) / [Schema](../modules/WDX.Schema.md) / [Model](../modules/WDX.Schema.Model.md) / [Filesystem](../modules/WDX.Schema.Model.Filesystem.md) / Entry

# Class: Entry

[Model](../modules/WDX.Schema.Model.md).[Filesystem](../modules/WDX.Schema.Model.Filesystem.md).Entry

## Hierarchy

- **`Entry`**

  ↳ [`Directory`](WDX.Schema.Model.Filesystem.Directory.md)

  ↳ [`File`](WDX.Schema.Model.Filesystem.File.md)

## Table of contents

### Constructors

- [constructor](WDX.Schema.Model.Filesystem.Entry.md#constructor)

### Properties

- [children](WDX.Schema.Model.Filesystem.Entry.md#children)
- [content](WDX.Schema.Model.Filesystem.Entry.md#content)
- [mime](WDX.Schema.Model.Filesystem.Entry.md#mime)
- [name](WDX.Schema.Model.Filesystem.Entry.md#name)
- [path](WDX.Schema.Model.Filesystem.Entry.md#path)
- [stats](WDX.Schema.Model.Filesystem.Entry.md#stats)
- [type](WDX.Schema.Model.Filesystem.Entry.md#type)

## Constructors

### constructor

• **new Entry**(`path`, `name`, `stats?`, `children?`, `content?`): [`Entry`](WDX.Schema.Model.Filesystem.Entry.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `name` | `string` |
| `stats?` | `Stats` |
| `children` | [`Entry`](WDX.Schema.Model.Filesystem.Entry.md)[] |
| `content?` | `string` |

#### Returns

[`Entry`](WDX.Schema.Model.Filesystem.Entry.md)

#### Defined in

WDX/Schema/Model/Filesystem/Entry.ts:18

## Properties

### children

• **children**: [`Entry`](WDX.Schema.Model.Filesystem.Entry.md)[]

#### Defined in

WDX/Schema/Model/Filesystem/Entry.ts:22

___

### content

• `Optional` **content**: `string`

#### Defined in

WDX/Schema/Model/Filesystem/Entry.ts:23

___

### mime

• `Optional` **mime**: `string`

#### Defined in

WDX/Schema/Model/Filesystem/Entry.ts:16

___

### name

• **name**: `string`

#### Defined in

WDX/Schema/Model/Filesystem/Entry.ts:20

___

### path

• **path**: `string`

#### Defined in

WDX/Schema/Model/Filesystem/Entry.ts:19

___

### stats

• `Optional` **stats**: `Stats`

#### Defined in

WDX/Schema/Model/Filesystem/Entry.ts:21

___

### type

• **type**: [`EntryType`](../enums/WDX.Schema.Model.Filesystem.EntryType.md)

#### Defined in

WDX/Schema/Model/Filesystem/Entry.ts:14

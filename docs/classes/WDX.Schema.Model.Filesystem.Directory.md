[@wago/wdx-schema](../README.md) / [Exports](../modules.md) / [WDX](../modules/WDX.md) / [Schema](../modules/WDX.Schema.md) / [Model](../modules/WDX.Schema.Model.md) / [Filesystem](../modules/WDX.Schema.Model.Filesystem.md) / Directory

# Class: Directory

[Model](../modules/WDX.Schema.Model.md).[Filesystem](../modules/WDX.Schema.Model.Filesystem.md).Directory

## Hierarchy

- [`Entry`](WDX.Schema.Model.Filesystem.Entry.md)

  ↳ **`Directory`**

## Table of contents

### Constructors

- [constructor](WDX.Schema.Model.Filesystem.Directory.md#constructor)

### Properties

- [children](WDX.Schema.Model.Filesystem.Directory.md#children)
- [content](WDX.Schema.Model.Filesystem.Directory.md#content)
- [mime](WDX.Schema.Model.Filesystem.Directory.md#mime)
- [name](WDX.Schema.Model.Filesystem.Directory.md#name)
- [path](WDX.Schema.Model.Filesystem.Directory.md#path)
- [stats](WDX.Schema.Model.Filesystem.Directory.md#stats)
- [type](WDX.Schema.Model.Filesystem.Directory.md#type)

## Constructors

### constructor

• **new Directory**(`name`, `path`, `stats?`, `children?`): [`Directory`](WDX.Schema.Model.Filesystem.Directory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `path` | `string` |
| `stats?` | `Stats` |
| `children` | [`Entry`](WDX.Schema.Model.Filesystem.Entry.md)[] |

#### Returns

[`Directory`](WDX.Schema.Model.Filesystem.Directory.md)

#### Overrides

[Entry](WDX.Schema.Model.Filesystem.Entry.md).[constructor](WDX.Schema.Model.Filesystem.Entry.md#constructor)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Filesystem/Directory.ts:17

## Properties

### children

• **children**: [`Entry`](WDX.Schema.Model.Filesystem.Entry.md)[]

#### Inherited from

[Entry](WDX.Schema.Model.Filesystem.Entry.md).[children](WDX.Schema.Model.Filesystem.Entry.md#children)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Filesystem/Directory.ts:21

___

### content

• `Optional` **content**: `string`

#### Inherited from

[Entry](WDX.Schema.Model.Filesystem.Entry.md).[content](WDX.Schema.Model.Filesystem.Entry.md#content)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Filesystem/Entry.ts:23

___

### mime

• `Optional` **mime**: `string`

#### Inherited from

[Entry](WDX.Schema.Model.Filesystem.Entry.md).[mime](WDX.Schema.Model.Filesystem.Entry.md#mime)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Filesystem/Entry.ts:16

___

### name

• **name**: `string`

#### Inherited from

[Entry](WDX.Schema.Model.Filesystem.Entry.md).[name](WDX.Schema.Model.Filesystem.Entry.md#name)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Filesystem/Directory.ts:18

___

### path

• **path**: `string`

#### Inherited from

[Entry](WDX.Schema.Model.Filesystem.Entry.md).[path](WDX.Schema.Model.Filesystem.Entry.md#path)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Filesystem/Directory.ts:19

___

### stats

• `Optional` **stats**: `Stats`

#### Inherited from

[Entry](WDX.Schema.Model.Filesystem.Entry.md).[stats](WDX.Schema.Model.Filesystem.Entry.md#stats)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Filesystem/Directory.ts:20

___

### type

• **type**: [`EntryType`](../enums/WDX.Schema.Model.Filesystem.EntryType.md) = `EntryType.Directory`

#### Overrides

[Entry](WDX.Schema.Model.Filesystem.Entry.md).[type](WDX.Schema.Model.Filesystem.Entry.md#type)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Filesystem/Directory.ts:15

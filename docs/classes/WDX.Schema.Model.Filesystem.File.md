[@wago/wdx-schema](../README.md) / [Exports](../modules.md) / [WDX](../modules/WDX.md) / [Schema](../modules/WDX.Schema.md) / [Model](../modules/WDX.Schema.Model.md) / [Filesystem](../modules/WDX.Schema.Model.Filesystem.md) / File

# Class: File

[Model](../modules/WDX.Schema.Model.md).[Filesystem](../modules/WDX.Schema.Model.Filesystem.md).File

## Hierarchy

- [`Entry`](WDX.Schema.Model.Filesystem.Entry.md)

  ↳ **`File`**

  ↳↳ [`Script`](WDX.Schema.Model.Script.Script.md)

## Table of contents

### Constructors

- [constructor](WDX.Schema.Model.Filesystem.File.md#constructor)

### Properties

- [children](WDX.Schema.Model.Filesystem.File.md#children)
- [content](WDX.Schema.Model.Filesystem.File.md#content)
- [mime](WDX.Schema.Model.Filesystem.File.md#mime)
- [name](WDX.Schema.Model.Filesystem.File.md#name)
- [path](WDX.Schema.Model.Filesystem.File.md#path)
- [stats](WDX.Schema.Model.Filesystem.File.md#stats)
- [type](WDX.Schema.Model.Filesystem.File.md#type)

## Constructors

### constructor

• **new File**(`name`, `path`, `stats?`, `content?`, `mime?`): [`File`](WDX.Schema.Model.Filesystem.File.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `path` | `string` |
| `stats?` | `Stats` |
| `content?` | `string` |
| `mime?` | `string` |

#### Returns

[`File`](WDX.Schema.Model.Filesystem.File.md)

#### Overrides

[Entry](WDX.Schema.Model.Filesystem.Entry.md).[constructor](WDX.Schema.Model.Filesystem.Entry.md#constructor)

#### Defined in

WDX/Schema/Model/Filesystem/File.ts:17

## Properties

### children

• **children**: [`Entry`](WDX.Schema.Model.Filesystem.Entry.md)[]

#### Inherited from

[Entry](WDX.Schema.Model.Filesystem.Entry.md).[children](WDX.Schema.Model.Filesystem.Entry.md#children)

#### Defined in

WDX/Schema/Model/Filesystem/Entry.ts:22

___

### content

• `Optional` **content**: `string`

#### Inherited from

[Entry](WDX.Schema.Model.Filesystem.Entry.md).[content](WDX.Schema.Model.Filesystem.Entry.md#content)

#### Defined in

WDX/Schema/Model/Filesystem/File.ts:21

___

### mime

• `Optional` **mime**: `string`

#### Inherited from

[Entry](WDX.Schema.Model.Filesystem.Entry.md).[mime](WDX.Schema.Model.Filesystem.Entry.md#mime)

#### Defined in

WDX/Schema/Model/Filesystem/File.ts:22

___

### name

• **name**: `string`

#### Inherited from

[Entry](WDX.Schema.Model.Filesystem.Entry.md).[name](WDX.Schema.Model.Filesystem.Entry.md#name)

#### Defined in

WDX/Schema/Model/Filesystem/File.ts:18

___

### path

• **path**: `string`

#### Inherited from

[Entry](WDX.Schema.Model.Filesystem.Entry.md).[path](WDX.Schema.Model.Filesystem.Entry.md#path)

#### Defined in

WDX/Schema/Model/Filesystem/File.ts:19

___

### stats

• `Optional` **stats**: `Stats`

#### Inherited from

[Entry](WDX.Schema.Model.Filesystem.Entry.md).[stats](WDX.Schema.Model.Filesystem.Entry.md#stats)

#### Defined in

WDX/Schema/Model/Filesystem/File.ts:20

___

### type

• **type**: [`EntryType`](../enums/WDX.Schema.Model.Filesystem.EntryType.md) = `EntryType.File`

#### Overrides

[Entry](WDX.Schema.Model.Filesystem.Entry.md).[type](WDX.Schema.Model.Filesystem.Entry.md#type)

#### Defined in

WDX/Schema/Model/Filesystem/File.ts:15

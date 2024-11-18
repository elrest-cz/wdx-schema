[@wago/wdx-schema](../README.md) / [Exports](../modules.md) / [WDX](../modules/WDX.md) / [Schema](../modules/WDX.Schema.md) / [Model](../modules/WDX.Schema.Model.md) / [Script](../modules/WDX.Schema.Model.Script.md) / Script

# Class: Script

[Model](../modules/WDX.Schema.Model.md).[Script](../modules/WDX.Schema.Model.Script.md).Script

## Hierarchy

- [`File`](WDX.Schema.Model.Filesystem.File.md)

  ↳ **`Script`**

## Table of contents

### Constructors

- [constructor](WDX.Schema.Model.Script.Script.md#constructor)

### Properties

- [children](WDX.Schema.Model.Script.Script.md#children)
- [content](WDX.Schema.Model.Script.Script.md#content)
- [instance](WDX.Schema.Model.Script.Script.md#instance)
- [mime](WDX.Schema.Model.Script.Script.md#mime)
- [name](WDX.Schema.Model.Script.Script.md#name)
- [path](WDX.Schema.Model.Script.Script.md#path)
- [stats](WDX.Schema.Model.Script.Script.md#stats)
- [type](WDX.Schema.Model.Script.Script.md#type)

## Constructors

### constructor

• **new Script**(`path`, `name`, `stats?`, `content?`, `instance?`): [`Script`](WDX.Schema.Model.Script.Script.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `name` | `string` |
| `stats?` | `Stats` |
| `content?` | `string` |
| `instance?` | [`Instance`](WDX.Schema.Model.Instance.Instance.md) |

#### Returns

[`Script`](WDX.Schema.Model.Script.Script.md)

#### Overrides

[File](WDX.Schema.Model.Filesystem.File.md).[constructor](WDX.Schema.Model.Filesystem.File.md#constructor)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Script/Script.ts:15

## Properties

### children

• **children**: [`Entry`](WDX.Schema.Model.Filesystem.Entry.md)[]

#### Inherited from

[File](WDX.Schema.Model.Filesystem.File.md).[children](WDX.Schema.Model.Filesystem.File.md#children)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Filesystem/Entry.ts:22

___

### content

• `Optional` **content**: `string`

#### Inherited from

[File](WDX.Schema.Model.Filesystem.File.md).[content](WDX.Schema.Model.Filesystem.File.md#content)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Script/Script.ts:19

___

### instance

• `Optional` **instance**: [`Instance`](WDX.Schema.Model.Instance.Instance.md)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Script/Script.ts:20

___

### mime

• `Optional` **mime**: `string`

#### Inherited from

[File](WDX.Schema.Model.Filesystem.File.md).[mime](WDX.Schema.Model.Filesystem.File.md#mime)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Filesystem/File.ts:22

___

### name

• **name**: `string`

#### Inherited from

[File](WDX.Schema.Model.Filesystem.File.md).[name](WDX.Schema.Model.Filesystem.File.md#name)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Script/Script.ts:17

___

### path

• **path**: `string`

#### Inherited from

[File](WDX.Schema.Model.Filesystem.File.md).[path](WDX.Schema.Model.Filesystem.File.md#path)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Script/Script.ts:16

___

### stats

• `Optional` **stats**: `Stats`

#### Inherited from

[File](WDX.Schema.Model.Filesystem.File.md).[stats](WDX.Schema.Model.Filesystem.File.md#stats)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Script/Script.ts:18

___

### type

• **type**: [`EntryType`](../enums/WDX.Schema.Model.Filesystem.EntryType.md) = `EntryType.File`

#### Inherited from

[File](WDX.Schema.Model.Filesystem.File.md).[type](WDX.Schema.Model.Filesystem.File.md#type)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Filesystem/File.ts:15

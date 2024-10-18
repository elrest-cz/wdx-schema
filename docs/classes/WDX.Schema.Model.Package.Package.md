[@wago/wdx-schema](../README.md) / [Exports](../modules.md) / [WDX](../modules/WDX.md) / [Schema](../modules/WDX.Schema.md) / [Model](../modules/WDX.Schema.Model.md) / [Package](../modules/WDX.Schema.Model.Package.md) / Package

# Class: Package

[Model](../modules/WDX.Schema.Model.md).[Package](../modules/WDX.Schema.Model.Package.md).Package

## Table of contents

### Constructors

- [constructor](WDX.Schema.Model.Package.Package.md#constructor)

### Properties

- [author](WDX.Schema.Model.Package.Package.md#author)
- [currentVersion](WDX.Schema.Model.Package.Package.md#currentversion)
- [description](WDX.Schema.Model.Package.Package.md#description)
- [documentation](WDX.Schema.Model.Package.Package.md#documentation)
- [id](WDX.Schema.Model.Package.Package.md#id)
- [installed](WDX.Schema.Model.Package.Package.md#installed)
- [license](WDX.Schema.Model.Package.Package.md#license)
- [mandatory](WDX.Schema.Model.Package.Package.md#mandatory)
- [name](WDX.Schema.Model.Package.Package.md#name)
- [newestVersion](WDX.Schema.Model.Package.Package.md#newestversion)
- [status](WDX.Schema.Model.Package.Package.md#status)
- [versions](WDX.Schema.Model.Package.Package.md#versions)

## Constructors

### constructor

• **new Package**(`id`, `author?`, `name?`, `description?`, `documentation?`, `license?`, `status?`, `currentVersion?`, `newestVersion?`, `installed?`, `mandatory?`, `versions?`): [`Package`](WDX.Schema.Model.Package.Package.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `id` | `number` | `undefined` |
| `author` | [`Author`](WDX.Schema.Model.Package.Author.md)[] | `undefined` |
| `name` | `string` | `''` |
| `description` | `string` | `''` |
| `documentation` | `string` | `''` |
| `license` | `string` | `''` |
| `status` | [`Status`](../enums/WDX.Schema.Model.Package.Status.md) | `Status.Available` |
| `currentVersion` | `string` | `''` |
| `newestVersion` | `string` | `''` |
| `installed` | `boolean` | `false` |
| `mandatory` | `boolean` | `false` |
| `versions` | [`Versions`](WDX.Schema.Model.Package.Versions.md) | `undefined` |

#### Returns

[`Package`](WDX.Schema.Model.Package.Package.md)

#### Defined in

WDX/Schema/Model/Package/Package.ts:14

## Properties

### author

• **author**: [`Author`](WDX.Schema.Model.Package.Author.md)[]

#### Defined in

WDX/Schema/Model/Package/Package.ts:18

___

### currentVersion

• **currentVersion**: `string` = `''`

#### Defined in

WDX/Schema/Model/Package/Package.ts:30

___

### description

• **description**: `string` = `''`

#### Defined in

WDX/Schema/Model/Package/Package.ts:22

___

### documentation

• **documentation**: `string` = `''`

#### Defined in

WDX/Schema/Model/Package/Package.ts:24

___

### id

• **id**: `number`

#### Defined in

WDX/Schema/Model/Package/Package.ts:16

___

### installed

• **installed**: `boolean` = `false`

#### Defined in

WDX/Schema/Model/Package/Package.ts:34

___

### license

• **license**: `string` = `''`

#### Defined in

WDX/Schema/Model/Package/Package.ts:26

___

### mandatory

• **mandatory**: `boolean` = `false`

#### Defined in

WDX/Schema/Model/Package/Package.ts:36

___

### name

• **name**: `string` = `''`

#### Defined in

WDX/Schema/Model/Package/Package.ts:20

___

### newestVersion

• **newestVersion**: `string` = `''`

#### Defined in

WDX/Schema/Model/Package/Package.ts:32

___

### status

• **status**: [`Status`](../enums/WDX.Schema.Model.Package.Status.md) = `Status.Available`

#### Defined in

WDX/Schema/Model/Package/Package.ts:28

___

### versions

• **versions**: [`Versions`](WDX.Schema.Model.Package.Versions.md)

#### Defined in

WDX/Schema/Model/Package/Package.ts:38

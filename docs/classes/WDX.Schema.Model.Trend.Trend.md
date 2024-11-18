[@wago/wdx-schema](../README.md) / [Exports](../modules.md) / [WDX](../modules/WDX.md) / [Schema](../modules/WDX.Schema.md) / [Model](../modules/WDX.Schema.Model.md) / [Trend](../modules/WDX.Schema.Model.Trend.md) / Trend

# Class: Trend

[Model](../modules/WDX.Schema.Model.md).[Trend](../modules/WDX.Schema.Model.Trend.md).Trend

## Table of contents

### Constructors

- [constructor](WDX.Schema.Model.Trend.Trend.md#constructor)

### Properties

- [active](WDX.Schema.Model.Trend.Trend.md#active)
- [createDateTime](WDX.Schema.Model.Trend.Trend.md#createdatetime)
- [dataPoolInterval](WDX.Schema.Model.Trend.Trend.md#datapoolinterval)
- [dataSet](WDX.Schema.Model.Trend.Trend.md#dataset)
- [exportCurrentViewButton](WDX.Schema.Model.Trend.Trend.md#exportcurrentviewbutton)
- [exportFullDataButton](WDX.Schema.Model.Trend.Trend.md#exportfulldatabutton)
- [extendedTouchFeatures](WDX.Schema.Model.Trend.Trend.md#extendedtouchfeatures)
- [id](WDX.Schema.Model.Trend.Trend.md#id)
- [intervalPicker](WDX.Schema.Model.Trend.Trend.md#intervalpicker)
- [legend](WDX.Schema.Model.Trend.Trend.md#legend)
- [name](WDX.Schema.Model.Trend.Trend.md#name)
- [resetButton](WDX.Schema.Model.Trend.Trend.md#resetbutton)
- [showLabels](WDX.Schema.Model.Trend.Trend.md#showlabels)
- [showLines](WDX.Schema.Model.Trend.Trend.md#showlines)
- [tooltips](WDX.Schema.Model.Trend.Trend.md#tooltips)
- [updatedDateTime](WDX.Schema.Model.Trend.Trend.md#updateddatetime)
- [uuid](WDX.Schema.Model.Trend.Trend.md#uuid)
- [xAxis](WDX.Schema.Model.Trend.Trend.md#xaxis)
- [yAxis](WDX.Schema.Model.Trend.Trend.md#yaxis)
- [zoom](WDX.Schema.Model.Trend.Trend.md#zoom)

## Constructors

### constructor

• **new Trend**(`name?`, `dataPoolInterval?`, `active?`, `showLines?`, `showLabels?`, `intervalPicker?`, `exportCurrentViewButton?`, `exportFullDataButton?`, `resetButton?`, `legend?`, `tooltips?`, `extendedTouchFeatures?`, `zoom?`, `xAxis?`, `yAxis?`, `dataSet?`, `createDateTime?`, `updatedDateTime?`, `uuid?`, `id?`): [`Trend`](WDX.Schema.Model.Trend.Trend.md)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `name?` | `string` | `undefined` | - |
| `dataPoolInterval` | `number` | `1000` | Data pool interval |
| `active` | `boolean` | `true` | - |
| `showLines` | `boolean` | `true` | - |
| `showLabels` | `boolean` | `true` | - |
| `intervalPicker?` | `boolean` | `undefined` | - |
| `exportCurrentViewButton?` | `boolean` | `undefined` | - |
| `exportFullDataButton?` | `boolean` | `undefined` | - |
| `resetButton?` | `boolean` | `undefined` | - |
| `legend?` | `boolean` | `undefined` | - |
| `tooltips?` | `boolean` | `undefined` | - |
| `extendedTouchFeatures?` | `boolean` | `undefined` | - |
| `zoom?` | `boolean` | `undefined` | - |
| `xAxis` | [`XAxis`](WDX.Schema.Model.Trend.XAxis.md) | `undefined` | - |
| `yAxis` | [`YAxis`](WDX.Schema.Model.Trend.YAxis.md)[] | `undefined` | - |
| `dataSet` | [`DataSet`](WDX.Schema.Model.Trend.DataSet.md)[] | `undefined` | - |
| `createDateTime` | `number` | `undefined` | - |
| `updatedDateTime` | `number` | `createDateTime` | - |
| `uuid` | `string` | `undefined` | - |
| `id?` | `number` | `undefined` | - |

#### Returns

[`Trend`](WDX.Schema.Model.Trend.Trend.md)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Trend/Trend.ts:14

## Properties

### active

• **active**: `boolean` = `true`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Trend/Trend.ts:20

___

### createDateTime

• **createDateTime**: `number`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Trend/Trend.ts:39

___

### dataPoolInterval

• **dataPoolInterval**: `number` = `1000`

Data pool interval

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Trend/Trend.ts:19

___

### dataSet

• **dataSet**: [`DataSet`](WDX.Schema.Model.Trend.DataSet.md)[]

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Trend/Trend.ts:37

___

### exportCurrentViewButton

• `Optional` **exportCurrentViewButton**: `boolean`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Trend/Trend.ts:26

___

### exportFullDataButton

• `Optional` **exportFullDataButton**: `boolean`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Trend/Trend.ts:27

___

### extendedTouchFeatures

• `Optional` **extendedTouchFeatures**: `boolean`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Trend/Trend.ts:32

___

### id

• `Optional` **id**: `number`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Trend/Trend.ts:43

___

### intervalPicker

• `Optional` **intervalPicker**: `boolean`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Trend/Trend.ts:25

___

### legend

• `Optional` **legend**: `boolean`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Trend/Trend.ts:30

___

### name

• `Optional` **name**: `string`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Trend/Trend.ts:15

___

### resetButton

• `Optional` **resetButton**: `boolean`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Trend/Trend.ts:28

___

### showLabels

• **showLabels**: `boolean` = `true`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Trend/Trend.ts:23

___

### showLines

• **showLines**: `boolean` = `true`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Trend/Trend.ts:22

___

### tooltips

• `Optional` **tooltips**: `boolean`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Trend/Trend.ts:31

___

### updatedDateTime

• **updatedDateTime**: `number` = `createDateTime`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Trend/Trend.ts:40

___

### uuid

• **uuid**: `string`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Trend/Trend.ts:42

___

### xAxis

• **xAxis**: [`XAxis`](WDX.Schema.Model.Trend.XAxis.md)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Trend/Trend.ts:35

___

### yAxis

• **yAxis**: [`YAxis`](WDX.Schema.Model.Trend.YAxis.md)[]

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Trend/Trend.ts:36

___

### zoom

• `Optional` **zoom**: `boolean`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Trend/Trend.ts:33

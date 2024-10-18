[@wago/wdx-schema](../README.md) / [Exports](../modules.md) / [WDX](../modules/WDX.md) / [Schema](../modules/WDX.Schema.md) / [Model](../modules/WDX.Schema.Model.md) / [Data](../modules/WDX.Schema.Model.Data.md) / [MetaData](../modules/WDX.Schema.Model.Data.MetaData.md) / MetaDataOPCUA

# Class: MetaDataOPCUA

[Data](../modules/WDX.Schema.Model.Data.md).[MetaData](../modules/WDX.Schema.Model.Data.MetaData.md).MetaDataOPCUA

## Hierarchy

- [`AbstractMetaData`](WDX.Schema.Model.Data.MetaData.AbstractMetaData.md)

  ↳ **`MetaDataOPCUA`**

## Table of contents

### Constructors

- [constructor](WDX.Schema.Model.Data.MetaData.MetaDataOPCUA.md#constructor)

### Properties

- [accessLevel](WDX.Schema.Model.Data.MetaData.MetaDataOPCUA.md#accesslevel)
- [arrayDimention](WDX.Schema.Model.Data.MetaData.MetaDataOPCUA.md#arraydimention)
- [dataType](WDX.Schema.Model.Data.MetaData.MetaDataOPCUA.md#datatype)
- [nodeClass](WDX.Schema.Model.Data.MetaData.MetaDataOPCUA.md#nodeclass)
- [nodeId](WDX.Schema.Model.Data.MetaData.MetaDataOPCUA.md#nodeid)
- [type](WDX.Schema.Model.Data.MetaData.MetaDataOPCUA.md#type)

## Constructors

### constructor

• **new MetaDataOPCUA**(`nodeId`, `nodeClass`, `dataType`, `accessLevel?`, `arrayDimention?`): [`MetaDataOPCUA`](WDX.Schema.Model.Data.MetaData.MetaDataOPCUA.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | `string` |
| `nodeClass` | `number` |
| `dataType` | `string` |
| `accessLevel?` | `string` |
| `arrayDimention?` | `number` |

#### Returns

[`MetaDataOPCUA`](WDX.Schema.Model.Data.MetaData.MetaDataOPCUA.md)

#### Overrides

[AbstractMetaData](WDX.Schema.Model.Data.MetaData.AbstractMetaData.md).[constructor](WDX.Schema.Model.Data.MetaData.AbstractMetaData.md#constructor)

#### Defined in

WDX/Schema/Model/Data/MetaData/MetaDataOPCUA.ts:14

## Properties

### accessLevel

• `Optional` **accessLevel**: `string`

#### Defined in

WDX/Schema/Model/Data/MetaData/MetaDataOPCUA.ts:18

___

### arrayDimention

• `Optional` **arrayDimention**: `number`

#### Defined in

WDX/Schema/Model/Data/MetaData/MetaDataOPCUA.ts:19

___

### dataType

• **dataType**: `string`

#### Defined in

WDX/Schema/Model/Data/MetaData/MetaDataOPCUA.ts:17

___

### nodeClass

• **nodeClass**: `number`

#### Defined in

WDX/Schema/Model/Data/MetaData/MetaDataOPCUA.ts:16

___

### nodeId

• **nodeId**: `string`

#### Defined in

WDX/Schema/Model/Data/MetaData/MetaDataOPCUA.ts:15

___

### type

• **type**: [`MetaDataType`](../enums/WDX.Schema.Model.Data.MetaData.MetaDataType.md) = `MetaDataType.OPCUA`

#### Overrides

[AbstractMetaData](WDX.Schema.Model.Data.MetaData.AbstractMetaData.md).[type](WDX.Schema.Model.Data.MetaData.AbstractMetaData.md#type)

#### Defined in

WDX/Schema/Model/Data/MetaData/MetaDataOPCUA.ts:12

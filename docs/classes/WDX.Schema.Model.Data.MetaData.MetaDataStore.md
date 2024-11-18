[@wago/wdx-schema](../README.md) / [Exports](../modules.md) / [WDX](../modules/WDX.md) / [Schema](../modules/WDX.Schema.md) / [Model](../modules/WDX.Schema.Model.md) / [Data](../modules/WDX.Schema.Model.Data.md) / [MetaData](../modules/WDX.Schema.Model.Data.MetaData.md) / MetaDataStore

# Class: MetaDataStore

[Data](../modules/WDX.Schema.Model.Data.md).[MetaData](../modules/WDX.Schema.Model.Data.MetaData.md).MetaDataStore

Key/Value pairs of any adapter data schema specific names and it's values

## Hierarchy

- [`AbstractMetaData`](WDX.Schema.Model.Data.MetaData.AbstractMetaData.md)

  ↳ **`MetaDataStore`**

  ↳↳ [`MetaDataMODBUS`](WDX.Schema.Model.Data.MetaData.MetaDataMODBUS.md)

  ↳↳ [`MetaDataVirtual`](WDX.Schema.Model.Data.MetaData.MetaDataVirtual.md)

  ↳↳ [`MetaDataMQTT`](WDX.Schema.Model.Data.MetaData.MetaDataMQTT.md)

## Table of contents

### Constructors

- [constructor](WDX.Schema.Model.Data.MetaData.MetaDataStore.md#constructor)

### Properties

- [id](WDX.Schema.Model.Data.MetaData.MetaDataStore.md#id)
- [parentId](WDX.Schema.Model.Data.MetaData.MetaDataStore.md#parentid)
- [type](WDX.Schema.Model.Data.MetaData.MetaDataStore.md#type)

## Constructors

### constructor

• **new MetaDataStore**(): [`MetaDataStore`](WDX.Schema.Model.Data.MetaData.MetaDataStore.md)

#### Returns

[`MetaDataStore`](WDX.Schema.Model.Data.MetaData.MetaDataStore.md)

#### Inherited from

[AbstractMetaData](WDX.Schema.Model.Data.MetaData.AbstractMetaData.md).[constructor](WDX.Schema.Model.Data.MetaData.AbstractMetaData.md#constructor)

## Properties

### id

• `Optional` **id**: `number`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Data/MetaData/MetaDataStore.ts:18

___

### parentId

• `Optional` **parentId**: `number`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Data/MetaData/MetaDataStore.ts:20

___

### type

• **type**: [`MetaDataType`](../enums/WDX.Schema.Model.Data.MetaData.MetaDataType.md) = `MetaDataType.VIRTUAL`

#### Overrides

[AbstractMetaData](WDX.Schema.Model.Data.MetaData.AbstractMetaData.md).[type](WDX.Schema.Model.Data.MetaData.AbstractMetaData.md#type)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Data/MetaData/MetaDataStore.ts:16

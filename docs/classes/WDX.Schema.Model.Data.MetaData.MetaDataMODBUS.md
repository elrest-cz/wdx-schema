[@wago/wdx-schema](../README.md) / [Exports](../modules.md) / [WDX](../modules/WDX.md) / [Schema](../modules/WDX.Schema.md) / [Model](../modules/WDX.Schema.Model.md) / [Data](../modules/WDX.Schema.Model.Data.md) / [MetaData](../modules/WDX.Schema.Model.Data.MetaData.md) / MetaDataMODBUS

# Class: MetaDataMODBUS

[Data](../modules/WDX.Schema.Model.Data.md).[MetaData](../modules/WDX.Schema.Model.Data.MetaData.md).MetaDataMODBUS

Key/Value pairs of any adapter data schema specific names and it's values

## Hierarchy

- [`MetaDataStore`](WDX.Schema.Model.Data.MetaData.MetaDataStore.md)

  ↳ **`MetaDataMODBUS`**

## Table of contents

### Constructors

- [constructor](WDX.Schema.Model.Data.MetaData.MetaDataMODBUS.md#constructor)

### Properties

- [MODBUSAccess](WDX.Schema.Model.Data.MetaData.MetaDataMODBUS.md#modbusaccess)
- [MODBUSAddressFrom](WDX.Schema.Model.Data.MetaData.MetaDataMODBUS.md#modbusaddressfrom)
- [MODBUSAddressLength](WDX.Schema.Model.Data.MetaData.MetaDataMODBUS.md#modbusaddresslength)
- [MODBUSType](WDX.Schema.Model.Data.MetaData.MetaDataMODBUS.md#modbustype)
- [id](WDX.Schema.Model.Data.MetaData.MetaDataMODBUS.md#id)
- [parentId](WDX.Schema.Model.Data.MetaData.MetaDataMODBUS.md#parentid)
- [type](WDX.Schema.Model.Data.MetaData.MetaDataMODBUS.md#type)

## Constructors

### constructor

• **new MetaDataMODBUS**(): [`MetaDataMODBUS`](WDX.Schema.Model.Data.MetaData.MetaDataMODBUS.md)

#### Returns

[`MetaDataMODBUS`](WDX.Schema.Model.Data.MetaData.MetaDataMODBUS.md)

#### Inherited from

[MetaDataStore](WDX.Schema.Model.Data.MetaData.MetaDataStore.md).[constructor](WDX.Schema.Model.Data.MetaData.MetaDataStore.md#constructor)

## Properties

### MODBUSAccess

• **MODBUSAccess**: [`MetadataMODBUSAccess`](../enums/WDX.Schema.Model.Data.MetaData.MetadataMODBUSAccess.md)[]

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Data/MetaData/MetaDataMODBUS.ts:24

___

### MODBUSAddressFrom

• **MODBUSAddressFrom**: `number`

Decimal number

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Data/MetaData/MetaDataMODBUS.ts:20

___

### MODBUSAddressLength

• **MODBUSAddressLength**: `number`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Data/MetaData/MetaDataMODBUS.ts:26

___

### MODBUSType

• **MODBUSType**: [`MetadataMODBUSType`](../enums/WDX.Schema.Model.Data.MetaData.MetadataMODBUSType.md)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Data/MetaData/MetaDataMODBUS.ts:22

___

### id

• `Optional` **id**: `number`

#### Inherited from

[MetaDataStore](WDX.Schema.Model.Data.MetaData.MetaDataStore.md).[id](WDX.Schema.Model.Data.MetaData.MetaDataStore.md#id)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Data/MetaData/MetaDataStore.ts:18

___

### parentId

• `Optional` **parentId**: `number`

#### Inherited from

[MetaDataStore](WDX.Schema.Model.Data.MetaData.MetaDataStore.md).[parentId](WDX.Schema.Model.Data.MetaData.MetaDataStore.md#parentid)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Data/MetaData/MetaDataStore.ts:20

___

### type

• **type**: [`MetaDataType`](../enums/WDX.Schema.Model.Data.MetaData.MetaDataType.md) = `MetaDataType.MODBUS`

#### Overrides

[MetaDataStore](WDX.Schema.Model.Data.MetaData.MetaDataStore.md).[type](WDX.Schema.Model.Data.MetaData.MetaDataStore.md#type)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Data/MetaData/MetaDataMODBUS.ts:15

[@wago/wdx-schema](../README.md) / [Exports](../modules.md) / [WDX](../modules/WDX.md) / [Schema](../modules/WDX.Schema.md) / [Model](../modules/WDX.Schema.Model.md) / [Exception](../modules/WDX.Schema.Model.Exception.md) / ForbiddenException

# Class: ForbiddenException

[Model](../modules/WDX.Schema.Model.md).[Exception](../modules/WDX.Schema.Model.Exception.md).ForbiddenException

## Hierarchy

- [`AbstractException`](WDX.Schema.Model.Exception.AbstractException.md)

  ↳ **`ForbiddenException`**

## Table of contents

### Constructors

- [constructor](WDX.Schema.Model.Exception.ForbiddenException.md#constructor)

### Properties

- [cause](WDX.Schema.Model.Exception.ForbiddenException.md#cause)
- [code](WDX.Schema.Model.Exception.ForbiddenException.md#code)
- [message](WDX.Schema.Model.Exception.ForbiddenException.md#message)
- [name](WDX.Schema.Model.Exception.ForbiddenException.md#name)
- [stack](WDX.Schema.Model.Exception.ForbiddenException.md#stack)
- [prepareStackTrace](WDX.Schema.Model.Exception.ForbiddenException.md#preparestacktrace)
- [stackTraceLimit](WDX.Schema.Model.Exception.ForbiddenException.md#stacktracelimit)

### Methods

- [captureStackTrace](WDX.Schema.Model.Exception.ForbiddenException.md#capturestacktrace)

## Constructors

### constructor

• **new ForbiddenException**(`message`): [`ForbiddenException`](WDX.Schema.Model.Exception.ForbiddenException.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

[`ForbiddenException`](WDX.Schema.Model.Exception.ForbiddenException.md)

#### Overrides

[AbstractException](WDX.Schema.Model.Exception.AbstractException.md).[constructor](WDX.Schema.Model.Exception.AbstractException.md#constructor)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Exception/ForbiddenException.ts:12

## Properties

### cause

• `Optional` **cause**: `unknown`

#### Inherited from

[AbstractException](WDX.Schema.Model.Exception.AbstractException.md).[cause](WDX.Schema.Model.Exception.AbstractException.md#cause)

#### Defined in

node_modules/typescript/lib/lib.es2022.error.d.ts:24

___

### code

• **code**: [`Code`](../enums/WDX.Schema.Model.Exception.Code.md)

#### Inherited from

[AbstractException](WDX.Schema.Model.Exception.AbstractException.md).[code](WDX.Schema.Model.Exception.AbstractException.md#code)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Exception/AbstractException.ts:13

___

### message

• **message**: `string`

#### Inherited from

[AbstractException](WDX.Schema.Model.Exception.AbstractException.md).[message](WDX.Schema.Model.Exception.AbstractException.md#message)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Exception/ForbiddenException.ts:13

___

### name

• **name**: `string`

#### Inherited from

[AbstractException](WDX.Schema.Model.Exception.AbstractException.md).[name](WDX.Schema.Model.Exception.AbstractException.md#name)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1075

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

[AbstractException](WDX.Schema.Model.Exception.AbstractException.md).[stack](WDX.Schema.Model.Exception.AbstractException.md#stack)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1077

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

Optional override for formatting stack traces

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

[AbstractException](WDX.Schema.Model.Exception.AbstractException.md).[prepareStackTrace](WDX.Schema.Model.Exception.AbstractException.md#preparestacktrace)

#### Defined in

modules/wdx-schema/node_modules/@types/node/globals.d.ts:28

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

[AbstractException](WDX.Schema.Model.Exception.AbstractException.md).[stackTraceLimit](WDX.Schema.Model.Exception.AbstractException.md#stacktracelimit)

#### Defined in

modules/wdx-schema/node_modules/@types/node/globals.d.ts:30

## Methods

### captureStackTrace

▸ **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

[AbstractException](WDX.Schema.Model.Exception.AbstractException.md).[captureStackTrace](WDX.Schema.Model.Exception.AbstractException.md#capturestacktrace)

#### Defined in

modules/wdx-schema/node_modules/@types/node/globals.d.ts:21

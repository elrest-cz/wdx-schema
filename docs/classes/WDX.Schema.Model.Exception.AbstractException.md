[@wago/wdx-schema](../README.md) / [Exports](../modules.md) / [WDX](../modules/WDX.md) / [Schema](../modules/WDX.Schema.md) / [Model](../modules/WDX.Schema.Model.md) / [Exception](../modules/WDX.Schema.Model.Exception.md) / AbstractException

# Class: AbstractException

[Model](../modules/WDX.Schema.Model.md).[Exception](../modules/WDX.Schema.Model.Exception.md).AbstractException

## Hierarchy

- `Error`

  ↳ **`AbstractException`**

  ↳↳ [`NotFoundException`](WDX.Schema.Model.Exception.NotFoundException.md)

  ↳↳ [`ForbiddenException`](WDX.Schema.Model.Exception.ForbiddenException.md)

  ↳↳ [`WrongRequestException`](WDX.Schema.Model.Exception.WrongRequestException.md)

  ↳↳ [`UnexpectedErrorException`](WDX.Schema.Model.Exception.UnexpectedErrorException.md)

## Table of contents

### Constructors

- [constructor](WDX.Schema.Model.Exception.AbstractException.md#constructor)

### Properties

- [cause](WDX.Schema.Model.Exception.AbstractException.md#cause)
- [code](WDX.Schema.Model.Exception.AbstractException.md#code)
- [message](WDX.Schema.Model.Exception.AbstractException.md#message)
- [name](WDX.Schema.Model.Exception.AbstractException.md#name)
- [stack](WDX.Schema.Model.Exception.AbstractException.md#stack)
- [prepareStackTrace](WDX.Schema.Model.Exception.AbstractException.md#preparestacktrace)
- [stackTraceLimit](WDX.Schema.Model.Exception.AbstractException.md#stacktracelimit)

### Methods

- [captureStackTrace](WDX.Schema.Model.Exception.AbstractException.md#capturestacktrace)

## Constructors

### constructor

• **new AbstractException**(`message`, `code`): [`AbstractException`](WDX.Schema.Model.Exception.AbstractException.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `code` | [`Code`](../enums/WDX.Schema.Model.Exception.Code.md) |

#### Returns

[`AbstractException`](WDX.Schema.Model.Exception.AbstractException.md)

#### Overrides

Error.constructor

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Exception/AbstractException.ts:11

## Properties

### cause

• `Optional` **cause**: `unknown`

#### Inherited from

Error.cause

#### Defined in

node_modules/typescript/lib/lib.es2022.error.d.ts:24

___

### code

• **code**: [`Code`](../enums/WDX.Schema.Model.Exception.Code.md)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Exception/AbstractException.ts:13

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Exception/AbstractException.ts:12

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1075

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

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

Error.prepareStackTrace

#### Defined in

modules/wdx-schema/node_modules/@types/node/globals.d.ts:28

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

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

Error.captureStackTrace

#### Defined in

modules/wdx-schema/node_modules/@types/node/globals.d.ts:21

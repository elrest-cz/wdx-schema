[@wago/wdx-schema](../README.md) / [Exports](../modules.md) / [WDX](../modules/WDX.md) / [Schema](../modules/WDX.Schema.md) / [Model](../modules/WDX.Schema.Model.md) / [Runtime](../modules/WDX.Schema.Model.Runtime.md) / [Report](../modules/WDX.Schema.Model.Runtime.Report.md) / Report

# Class: Report

[Runtime](../modules/WDX.Schema.Model.Runtime.md).[Report](../modules/WDX.Schema.Model.Runtime.Report.md).Report

## Table of contents

### Constructors

- [constructor](WDX.Schema.Model.Runtime.Report.Report.md#constructor)

### Properties

- [environmentVariables](WDX.Schema.Model.Runtime.Report.Report.md#environmentvariables)
- [header](WDX.Schema.Model.Runtime.Report.Report.md#header)
- [instances](WDX.Schema.Model.Runtime.Report.Report.md#instances)
- [javascriptHeap](WDX.Schema.Model.Runtime.Report.Report.md#javascriptheap)
- [javascriptStack](WDX.Schema.Model.Runtime.Report.Report.md#javascriptstack)
- [libuv](WDX.Schema.Model.Runtime.Report.Report.md#libuv)
- [nativeStack](WDX.Schema.Model.Runtime.Report.Report.md#nativestack)
- [resourceUsage](WDX.Schema.Model.Runtime.Report.Report.md#resourceusage)
- [sharedObjects](WDX.Schema.Model.Runtime.Report.Report.md#sharedobjects)
- [userLimits](WDX.Schema.Model.Runtime.Report.Report.md#userlimits)
- [uvthreadResourceUsage](WDX.Schema.Model.Runtime.Report.Report.md#uvthreadresourceusage)
- [workers](WDX.Schema.Model.Runtime.Report.Report.md#workers)

## Constructors

### constructor

• **new Report**(`header`, `javascriptStack`, `nativeStack`, `javascriptHeap`, `resourceUsage`, `uvthreadResourceUsage`, `libuv`, `workers`, `environmentVariables`, `userLimits`, `sharedObjects`): [`Report`](WDX.Schema.Model.Runtime.Report.Report.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `header` | [`Header`](WDX.Schema.Model.Runtime.Report.Header.md) |
| `javascriptStack` | [`JavascriptStack`](WDX.Schema.Model.Runtime.Report.JavascriptStack.md) |
| `nativeStack` | [`NativeStack`](WDX.Schema.Model.Runtime.Report.NativeStack.md) |
| `javascriptHeap` | [`JavascriptHeap`](WDX.Schema.Model.Runtime.Report.JavascriptHeap.md) |
| `resourceUsage` | [`ResourceUsage`](WDX.Schema.Model.Runtime.Report.ResourceUsage.md) |
| `uvthreadResourceUsage` | [`UvthreadResourceUsage`](WDX.Schema.Model.Runtime.Report.UvthreadResourceUsage.md) |
| `libuv` | `any`[] |
| `workers` | `any`[] |
| `environmentVariables` | `Object` |
| `userLimits` | `any` |
| `sharedObjects` | `string`[] |

#### Returns

[`Report`](WDX.Schema.Model.Runtime.Report.Report.md)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Runtime/Report/Report.ts:20

## Properties

### environmentVariables

• **environmentVariables**: `Object`

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Runtime/Report/Report.ts:29

___

### header

• **header**: [`Header`](WDX.Schema.Model.Runtime.Report.Header.md)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Runtime/Report/Report.ts:21

___

### instances

• **instances**: [`InstanceMonitor`](WDX.Schema.Model.Instance.InstanceMonitor.md)[] = `[]`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Runtime/Report/Report.ts:19

___

### javascriptHeap

• **javascriptHeap**: [`JavascriptHeap`](WDX.Schema.Model.Runtime.Report.JavascriptHeap.md)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Runtime/Report/Report.ts:24

___

### javascriptStack

• **javascriptStack**: [`JavascriptStack`](WDX.Schema.Model.Runtime.Report.JavascriptStack.md)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Runtime/Report/Report.ts:22

___

### libuv

• **libuv**: `any`[]

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Runtime/Report/Report.ts:27

___

### nativeStack

• **nativeStack**: [`NativeStack`](WDX.Schema.Model.Runtime.Report.NativeStack.md)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Runtime/Report/Report.ts:23

___

### resourceUsage

• **resourceUsage**: [`ResourceUsage`](WDX.Schema.Model.Runtime.Report.ResourceUsage.md)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Runtime/Report/Report.ts:25

___

### sharedObjects

• **sharedObjects**: `string`[]

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Runtime/Report/Report.ts:31

___

### userLimits

• **userLimits**: `any`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Runtime/Report/Report.ts:30

___

### uvthreadResourceUsage

• **uvthreadResourceUsage**: [`UvthreadResourceUsage`](WDX.Schema.Model.Runtime.Report.UvthreadResourceUsage.md)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Runtime/Report/Report.ts:26

___

### workers

• **workers**: `any`[]

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Runtime/Report/Report.ts:28

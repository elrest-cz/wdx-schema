[@wago/wdx-schema](../README.md) / [Exports](../modules.md) / [WDX](../modules/WDX.md) / [Schema](../modules/WDX.Schema.md) / [Model](../modules/WDX.Schema.Model.md) / [Runtime](../modules/WDX.Schema.Model.Runtime.md) / [Report](../modules/WDX.Schema.Model.Runtime.Report.md) / UvthreadResourceUsage

# Class: UvthreadResourceUsage

[Runtime](../modules/WDX.Schema.Model.Runtime.md).[Report](../modules/WDX.Schema.Model.Runtime.Report.md).UvthreadResourceUsage

## Table of contents

### Constructors

- [constructor](WDX.Schema.Model.Runtime.Report.UvthreadResourceUsage.md#constructor)

### Properties

- [cpuConsumptionPercent](WDX.Schema.Model.Runtime.Report.UvthreadResourceUsage.md#cpuconsumptionpercent)
- [fsActivity](WDX.Schema.Model.Runtime.Report.UvthreadResourceUsage.md#fsactivity)
- [kernelCpuConsumptionPercent](WDX.Schema.Model.Runtime.Report.UvthreadResourceUsage.md#kernelcpuconsumptionpercent)
- [kernelCpuSeconds](WDX.Schema.Model.Runtime.Report.UvthreadResourceUsage.md#kernelcpuseconds)
- [userCpuConsumptionPercent](WDX.Schema.Model.Runtime.Report.UvthreadResourceUsage.md#usercpuconsumptionpercent)
- [userCpuSeconds](WDX.Schema.Model.Runtime.Report.UvthreadResourceUsage.md#usercpuseconds)

## Constructors

### constructor

• **new UvthreadResourceUsage**(`userCpuSeconds`, `kernelCpuSeconds`, `cpuConsumptionPercent`, `userCpuConsumptionPercent`, `kernelCpuConsumptionPercent`, `fsActivity`): [`UvthreadResourceUsage`](WDX.Schema.Model.Runtime.Report.UvthreadResourceUsage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `userCpuSeconds` | `number` |
| `kernelCpuSeconds` | `number` |
| `cpuConsumptionPercent` | `number` |
| `userCpuConsumptionPercent` | `number` |
| `kernelCpuConsumptionPercent` | `number` |
| `fsActivity` | `Object` |
| `fsActivity.reads` | `number` |
| `fsActivity.writes` | `number` |

#### Returns

[`UvthreadResourceUsage`](WDX.Schema.Model.Runtime.Report.UvthreadResourceUsage.md)

#### Defined in

WDX/Schema/Model/Runtime/Report/UvthreadResourceUsage.ts:11

## Properties

### cpuConsumptionPercent

• **cpuConsumptionPercent**: `number`

#### Defined in

WDX/Schema/Model/Runtime/Report/UvthreadResourceUsage.ts:14

___

### fsActivity

• **fsActivity**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `reads` | `number` |
| `writes` | `number` |

#### Defined in

WDX/Schema/Model/Runtime/Report/UvthreadResourceUsage.ts:17

___

### kernelCpuConsumptionPercent

• **kernelCpuConsumptionPercent**: `number`

#### Defined in

WDX/Schema/Model/Runtime/Report/UvthreadResourceUsage.ts:16

___

### kernelCpuSeconds

• **kernelCpuSeconds**: `number`

#### Defined in

WDX/Schema/Model/Runtime/Report/UvthreadResourceUsage.ts:13

___

### userCpuConsumptionPercent

• **userCpuConsumptionPercent**: `number`

#### Defined in

WDX/Schema/Model/Runtime/Report/UvthreadResourceUsage.ts:15

___

### userCpuSeconds

• **userCpuSeconds**: `number`

#### Defined in

WDX/Schema/Model/Runtime/Report/UvthreadResourceUsage.ts:12

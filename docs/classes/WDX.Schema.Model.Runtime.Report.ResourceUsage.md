[@wago/wdx-schema](../README.md) / [Exports](../modules.md) / [WDX](../modules/WDX.md) / [Schema](../modules/WDX.Schema.md) / [Model](../modules/WDX.Schema.Model.md) / [Runtime](../modules/WDX.Schema.Model.Runtime.md) / [Report](../modules/WDX.Schema.Model.Runtime.Report.md) / ResourceUsage

# Class: ResourceUsage

[Runtime](../modules/WDX.Schema.Model.Runtime.md).[Report](../modules/WDX.Schema.Model.Runtime.Report.md).ResourceUsage

## Table of contents

### Constructors

- [constructor](WDX.Schema.Model.Runtime.Report.ResourceUsage.md#constructor)

### Properties

- [available\_memory](WDX.Schema.Model.Runtime.Report.ResourceUsage.md#available_memory)
- [constrained\_memory](WDX.Schema.Model.Runtime.Report.ResourceUsage.md#constrained_memory)
- [cpuConsumptionPercent](WDX.Schema.Model.Runtime.Report.ResourceUsage.md#cpuconsumptionpercent)
- [free\_memory](WDX.Schema.Model.Runtime.Report.ResourceUsage.md#free_memory)
- [fsActivity](WDX.Schema.Model.Runtime.Report.ResourceUsage.md#fsactivity)
- [kernelCpuConsumptionPercent](WDX.Schema.Model.Runtime.Report.ResourceUsage.md#kernelcpuconsumptionpercent)
- [kernelCpuSeconds](WDX.Schema.Model.Runtime.Report.ResourceUsage.md#kernelcpuseconds)
- [maxRss](WDX.Schema.Model.Runtime.Report.ResourceUsage.md#maxrss)
- [pageFaults](WDX.Schema.Model.Runtime.Report.ResourceUsage.md#pagefaults)
- [rss](WDX.Schema.Model.Runtime.Report.ResourceUsage.md#rss)
- [total\_memory](WDX.Schema.Model.Runtime.Report.ResourceUsage.md#total_memory)
- [userCpuConsumptionPercent](WDX.Schema.Model.Runtime.Report.ResourceUsage.md#usercpuconsumptionpercent)
- [userCpuSeconds](WDX.Schema.Model.Runtime.Report.ResourceUsage.md#usercpuseconds)

## Constructors

### constructor

• **new ResourceUsage**(`rss`, `free_memory`, `total_memory`, `available_memory`, `maxRss`, `constrained_memory`, `userCpuSeconds`, `kernelCpuSeconds`, `cpuConsumptionPercent`, `userCpuConsumptionPercent`, `kernelCpuConsumptionPercent`, `pageFaults`, `fsActivity`): [`ResourceUsage`](WDX.Schema.Model.Runtime.Report.ResourceUsage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rss` | `number` |
| `free_memory` | `number` |
| `total_memory` | `number` |
| `available_memory` | `number` |
| `maxRss` | `number` |
| `constrained_memory` | `number` |
| `userCpuSeconds` | `number` |
| `kernelCpuSeconds` | `number` |
| `cpuConsumptionPercent` | `number` |
| `userCpuConsumptionPercent` | `number` |
| `kernelCpuConsumptionPercent` | `number` |
| `pageFaults` | `Object` |
| `pageFaults.IONotRequired` | `number` |
| `pageFaults.IORequired` | `number` |
| `fsActivity` | `Object` |
| `fsActivity.reads` | `number` |
| `fsActivity.writes` | `number` |

#### Returns

[`ResourceUsage`](WDX.Schema.Model.Runtime.Report.ResourceUsage.md)

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Runtime/Report/ResourceUsage.ts:11

## Properties

### available\_memory

• **available\_memory**: `number`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Runtime/Report/ResourceUsage.ts:15

___

### constrained\_memory

• **constrained\_memory**: `number`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Runtime/Report/ResourceUsage.ts:17

___

### cpuConsumptionPercent

• **cpuConsumptionPercent**: `number`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Runtime/Report/ResourceUsage.ts:20

___

### free\_memory

• **free\_memory**: `number`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Runtime/Report/ResourceUsage.ts:13

___

### fsActivity

• **fsActivity**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `reads` | `number` |
| `writes` | `number` |

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Runtime/Report/ResourceUsage.ts:27

___

### kernelCpuConsumptionPercent

• **kernelCpuConsumptionPercent**: `number`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Runtime/Report/ResourceUsage.ts:22

___

### kernelCpuSeconds

• **kernelCpuSeconds**: `number`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Runtime/Report/ResourceUsage.ts:19

___

### maxRss

• **maxRss**: `number`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Runtime/Report/ResourceUsage.ts:16

___

### pageFaults

• **pageFaults**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `IONotRequired` | `number` |
| `IORequired` | `number` |

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Runtime/Report/ResourceUsage.ts:23

___

### rss

• **rss**: `number`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Runtime/Report/ResourceUsage.ts:12

___

### total\_memory

• **total\_memory**: `number`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Runtime/Report/ResourceUsage.ts:14

___

### userCpuConsumptionPercent

• **userCpuConsumptionPercent**: `number`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Runtime/Report/ResourceUsage.ts:21

___

### userCpuSeconds

• **userCpuSeconds**: `number`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Runtime/Report/ResourceUsage.ts:18

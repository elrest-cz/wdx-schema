[@wago/wdx-schema](../README.md) / [Exports](../modules.md) / [WDX](../modules/WDX.md) / [Schema](../modules/WDX.Schema.md) / [Model](../modules/WDX.Schema.Model.md) / [Instance](../modules/WDX.Schema.Model.Instance.md) / JSSWorkspaceExecutionOptions

# Class: JSSWorkspaceExecutionOptions

[Model](../modules/WDX.Schema.Model.md).[Instance](../modules/WDX.Schema.Model.Instance.md).JSSWorkspaceExecutionOptions

## Table of contents

### Constructors

- [constructor](WDX.Schema.Model.Instance.JSSWorkspaceExecutionOptions.md#constructor)

### Properties

- [mode](WDX.Schema.Model.Instance.JSSWorkspaceExecutionOptions.md#mode)
- [options](WDX.Schema.Model.Instance.JSSWorkspaceExecutionOptions.md#options)
- [script](WDX.Schema.Model.Instance.JSSWorkspaceExecutionOptions.md#script)

## Constructors

### constructor

• **new JSSWorkspaceExecutionOptions**(): [`JSSWorkspaceExecutionOptions`](WDX.Schema.Model.Instance.JSSWorkspaceExecutionOptions.md)

#### Returns

[`JSSWorkspaceExecutionOptions`](WDX.Schema.Model.Instance.JSSWorkspaceExecutionOptions.md)

## Properties

### mode

• **mode**: [`ExecutionMode`](../enums/WDX.Schema.Model.Instance.ExecutionMode.md) = `ExecutionMode.worker`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Instance/JSSWorkspaceExecutionOptions.ts:12

___

### options

• **options**: `SpawnOptions` \| `WorkerOptions`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Instance/JSSWorkspaceExecutionOptions.ts:14

___

### script

• **script**: `string` = `'./node_modules/.bin/wdx-js-workspace'`

#### Defined in

modules/wdx-schema/src/WDX/Schema/Model/Instance/JSSWorkspaceExecutionOptions.ts:13

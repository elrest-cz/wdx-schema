[@wago/wdx-schema](../README.md) / [Exports](../modules.md) / [WDX](../modules/WDX.md) / [Schema](../modules/WDX.Schema.md) / [Message](../modules/WDX.Schema.Message.md) / AbstractMessage

# Class: AbstractMessage

[Schema](../modules/WDX.Schema.md).[Message](../modules/WDX.Schema.Message.md).AbstractMessage

## Hierarchy

- **`AbstractMessage`**

  ↳ [`KeepAlive`](WDX.Schema.Message.KeepAlive.md)

  ↳ [`DataUpdate`](WDX.Schema.Message.Data.DataUpdate.md)

  ↳ [`RegisterProviderRequest`](WDX.Schema.Message.Data.RegisterProviderRequest.md)

  ↳ [`RegisterProviderResponse`](WDX.Schema.Message.Data.RegisterProviderResponse.md)

  ↳ [`RegisterValueRequest`](WDX.Schema.Message.Data.RegisterValueRequest.md)

  ↳ [`RegisterValueResponse`](WDX.Schema.Message.Data.RegisterValueResponse.md)

  ↳ [`RegisterSchemaChangesRequest`](WDX.Schema.Message.Data.RegisterSchemaChangesRequest.md)

  ↳ [`RegisterSchemaChangesResponse`](WDX.Schema.Message.Data.RegisterSchemaChangesResponse.md)

  ↳ [`UnregisterValueRequest`](WDX.Schema.Message.Data.UnregisterValueRequest.md)

  ↳ [`UnregisterValueResponse`](WDX.Schema.Message.Data.UnregisterValueResponse.md)

  ↳ [`UnregisterSchemaChangesRequest`](WDX.Schema.Message.Data.UnregisterSchemaChangesRequest.md)

  ↳ [`UnregisterSchemaChangesResponse`](WDX.Schema.Message.Data.UnregisterSchemaChangesResponse.md)

  ↳ [`SetValueRequest`](WDX.Schema.Message.Data.SetValueRequest.md)

  ↳ [`SetValueResponse`](WDX.Schema.Message.Data.SetValueResponse.md)

  ↳ [`GetValueRequest`](WDX.Schema.Message.Data.GetValueRequest.md)

  ↳ [`GetValueResponse`](WDX.Schema.Message.Data.GetValueResponse.md)

  ↳ [`SetSchemaRequest`](WDX.Schema.Message.Data.SetSchemaRequest.md)

  ↳ [`SetSchemaResponse`](WDX.Schema.Message.Data.SetSchemaResponse.md)

  ↳ [`GetSchemaRequest`](WDX.Schema.Message.Data.GetSchemaRequest.md)

  ↳ [`GetSchemaResponse`](WDX.Schema.Message.Data.GetSchemaResponse.md)

  ↳ [`SchemaChanges`](WDX.Schema.Message.Data.SchemaChanges.md)

  ↳ [`DeleteSchemaRequest`](WDX.Schema.Message.Data.DeleteSchemaRequest.md)

  ↳ [`DeleteSchemaResponse`](WDX.Schema.Message.Data.DeleteSchemaResponse.md)

  ↳ [`RefreshSchemaRequest`](WDX.Schema.Message.Data.RefreshSchemaRequest.md)

  ↳ [`RefreshSchemaResponse`](WDX.Schema.Message.Data.RefreshSchemaResponse.md)

  ↳ [`IAm`](WDX.Schema.Message.Instance.IAm.md)

  ↳ [`DetailRequest`](WDX.Schema.Message.Instance.DetailRequest.md)

  ↳ [`DetailResponse`](WDX.Schema.Message.Instance.DetailResponse.md)

  ↳ [`ListRequest`](WDX.Schema.Message.Instance.ListRequest.md)

  ↳ [`ListResponse`](WDX.Schema.Message.Instance.ListResponse.md)

  ↳ [`LogMessage`](WDX.Schema.Message.Instance.LogMessage.md)

  ↳ [`LogSubscribeRequestMessage`](WDX.Schema.Message.Instance.LogSubscribeRequestMessage.md)

  ↳ [`LogSubscribeResponseMessage`](WDX.Schema.Message.Instance.LogSubscribeResponseMessage.md)

  ↳ [`LogUnsubscribeRequestMessage`](WDX.Schema.Message.Instance.LogUnsubscribeRequestMessage.md)

  ↳ [`LogUnsubscribeResponseMessage`](WDX.Schema.Message.Instance.LogUnsubscribeResponseMessage.md)

  ↳ [`RestartRequest`](WDX.Schema.Message.Instance.RestartRequest.md)

  ↳ [`RestartResponse`](WDX.Schema.Message.Instance.RestartResponse.md)

  ↳ [`StartRequest`](WDX.Schema.Message.Instance.StartRequest.md)

  ↳ [`StartResponse`](WDX.Schema.Message.Instance.StartResponse.md)

  ↳ [`DeleteRequest`](WDX.Schema.Message.Instance.DeleteRequest.md)

  ↳ [`DeleteResponse`](WDX.Schema.Message.Instance.DeleteResponse.md)

  ↳ [`StopRequest`](WDX.Schema.Message.Instance.StopRequest.md)

  ↳ [`StopResponse`](WDX.Schema.Message.Instance.StopResponse.md)

  ↳ [`SaveRequest`](WDX.Schema.Message.Instance.SaveRequest.md)

  ↳ [`SaveResponse`](WDX.Schema.Message.Instance.SaveResponse.md)

  ↳ [`WhoIsRequest`](WDX.Schema.Message.Instance.WhoIsRequest.md)

  ↳ [`WhoIsResponse`](WDX.Schema.Message.Instance.WhoIsResponse.md)

  ↳ [`InfoRequest`](WDX.Schema.Message.Runtime.InfoRequest.md)

  ↳ [`InfoResponse`](WDX.Schema.Message.Runtime.InfoResponse.md)

  ↳ [`Monitor`](WDX.Schema.Message.Runtime.Monitor.md)

  ↳ [`MonitorSubscribeRequest`](WDX.Schema.Message.Runtime.MonitorSubscribeRequest.md)

  ↳ [`MonitorSubscribeResponse`](WDX.Schema.Message.Runtime.MonitorSubscribeResponse.md)

  ↳ [`MonitorUnsubscribeRequest`](WDX.Schema.Message.Runtime.MonitorUnsubscribeRequest.md)

  ↳ [`MonitorUnsubscribeResponse`](WDX.Schema.Message.Runtime.MonitorUnsubscribeResponse.md)

  ↳ [`StartRequest`](WDX.Schema.Message.Runtime.StartRequest.md)

  ↳ [`StartResponse`](WDX.Schema.Message.Runtime.StartResponse.md)

  ↳ [`StopRequest`](WDX.Schema.Message.Runtime.StopRequest.md)

  ↳ [`StopResponse`](WDX.Schema.Message.Runtime.StopResponse.md)

  ↳ [`RestartRequest`](WDX.Schema.Message.Runtime.RestartRequest.md)

  ↳ [`RestartResponse`](WDX.Schema.Message.Runtime.RestartResponse.md)

  ↳ [`BrowseRequest`](WDX.Schema.Message.Script.BrowseRequest.md)

  ↳ [`BrowseResponse`](WDX.Schema.Message.Script.BrowseResponse.md)

  ↳ [`DeleteRequest`](WDX.Schema.Message.Script.DeleteRequest.md)

  ↳ [`DeleteResponse`](WDX.Schema.Message.Script.DeleteResponse.md)

  ↳ [`SaveRequest`](WDX.Schema.Message.Script.SaveRequest.md)

  ↳ [`SaveResponse`](WDX.Schema.Message.Script.SaveResponse.md)

  ↳ [`DeleteRequest`](WDX.Schema.Message.Trend.DeleteRequest.md)

  ↳ [`DeleteResponse`](WDX.Schema.Message.Trend.DeleteResponse.md)

  ↳ [`ListRequest`](WDX.Schema.Message.Trend.ListRequest.md)

  ↳ [`ListResponse`](WDX.Schema.Message.Trend.ListResponse.md)

  ↳ [`SetRequest`](WDX.Schema.Message.Trend.SetRequest.md)

  ↳ [`SetResponse`](WDX.Schema.Message.Trend.SetResponse.md)

  ↳ [`SubscribeRequest`](WDX.Schema.Message.Trend.SubscribeRequest.md)

  ↳ [`SubscribeResponse`](WDX.Schema.Message.Trend.SubscribeResponse.md)

  ↳ [`UnsubscribeRequest`](WDX.Schema.Message.Trend.UnsubscribeRequest.md)

  ↳ [`UnsubscribeResponse`](WDX.Schema.Message.Trend.UnsubscribeResponse.md)

  ↳ [`Update`](WDX.Schema.Message.Trend.Update.md)

  ↳ [`GraphConfigurationRequest`](WDX.Schema.Message.Trend.GraphConfigurationRequest.md)

  ↳ [`GraphConfigurationResponse`](WDX.Schema.Message.Trend.GraphConfigurationResponse.md)

  ↳ [`GraphDataRequest`](WDX.Schema.Message.Trend.GraphDataRequest.md)

  ↳ [`GraphDataResponse`](WDX.Schema.Message.Trend.GraphDataResponse.md)

  ↳ [`TrendExportRequest`](WDX.Schema.Message.Trend.TrendExportRequest.md)

  ↳ [`TrendExportResponse`](WDX.Schema.Message.Trend.TrendExportResponse.md)

  ↳ [`DetailRequest`](WDX.Schema.Message.Trend.DetailRequest.md)

  ↳ [`DetailResponse`](WDX.Schema.Message.Trend.DetailResponse.md)

  ↳ [`DetailRequest`](WDX.Schema.Message.Alarm.DetailRequest.md)

  ↳ [`DetailResponse`](WDX.Schema.Message.Alarm.DetailResponse.md)

  ↳ [`ConfirmRequest`](WDX.Schema.Message.Alarm.ConfirmRequest.md)

  ↳ [`ConfirmResponse`](WDX.Schema.Message.Alarm.ConfirmResponse.md)

  ↳ [`ListRequest`](WDX.Schema.Message.Alarm.ListRequest.md)

  ↳ [`ListResponse`](WDX.Schema.Message.Alarm.ListResponse.md)

  ↳ [`ListHistoryRequest`](WDX.Schema.Message.Alarm.ListHistoryRequest.md)

  ↳ [`ListHistoryResponse`](WDX.Schema.Message.Alarm.ListHistoryResponse.md)

  ↳ [`DeleteRequest`](WDX.Schema.Message.Alarm.DeleteRequest.md)

  ↳ [`DeleteResponse`](WDX.Schema.Message.Alarm.DeleteResponse.md)

  ↳ [`SetRequest`](WDX.Schema.Message.Alarm.SetRequest.md)

  ↳ [`SetResponse`](WDX.Schema.Message.Alarm.SetResponse.md)

  ↳ [`SubscribeRequest`](WDX.Schema.Message.Alarm.SubscribeRequest.md)

  ↳ [`SubscribeResponse`](WDX.Schema.Message.Alarm.SubscribeResponse.md)

  ↳ [`UnsubscribeRequest`](WDX.Schema.Message.Alarm.UnsubscribeRequest.md)

  ↳ [`UnsubscribeResponse`](WDX.Schema.Message.Alarm.UnsubscribeResponse.md)

  ↳ [`Update`](WDX.Schema.Message.Alarm.Update.md)

  ↳ [`ListRequest`](WDX.Schema.Message.Access.User.ListRequest.md)

  ↳ [`ListResponse`](WDX.Schema.Message.Access.User.ListResponse.md)

  ↳ [`SaveRequest`](WDX.Schema.Message.Access.User.SaveRequest.md)

  ↳ [`SaveResponse`](WDX.Schema.Message.Access.User.SaveResponse.md)

  ↳ [`DeleteRequest`](WDX.Schema.Message.Access.User.DeleteRequest.md)

  ↳ [`DeleteResponse`](WDX.Schema.Message.Access.User.DeleteResponse.md)

  ↳ [`ListRequest`](WDX.Schema.Message.Access.Role.ListRequest.md)

  ↳ [`ListResponse`](WDX.Schema.Message.Access.Role.ListResponse.md)

  ↳ [`SaveRequest`](WDX.Schema.Message.Access.Role.SaveRequest.md)

  ↳ [`SaveResponse`](WDX.Schema.Message.Access.Role.SaveResponse.md)

  ↳ [`DeleteRequest`](WDX.Schema.Message.Access.Role.DeleteRequest.md)

  ↳ [`DeleteResponse`](WDX.Schema.Message.Access.Role.DeleteResponse.md)

## Table of contents

### Constructors

- [constructor](WDX.Schema.Message.AbstractMessage.md#constructor)

### Properties

- [body](WDX.Schema.Message.AbstractMessage.md#body)
- [error](WDX.Schema.Message.AbstractMessage.md#error)
- [origin](WDX.Schema.Message.AbstractMessage.md#origin)
- [target](WDX.Schema.Message.AbstractMessage.md#target)
- [timestamp](WDX.Schema.Message.AbstractMessage.md#timestamp)
- [topic](WDX.Schema.Message.AbstractMessage.md#topic)
- [type](WDX.Schema.Message.AbstractMessage.md#type)
- [uuid](WDX.Schema.Message.AbstractMessage.md#uuid)

## Constructors

### constructor

• **new AbstractMessage**(`body?`, `uuid?`, `error?`, `topic?`, `target?`, `origin?`): [`AbstractMessage`](WDX.Schema.Message.AbstractMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `body?` | `any` |
| `uuid?` | `string` |
| `error?` | [`MessageError`](WDX.Schema.Message.MessageError.md) |
| `topic?` | `string` |
| `target?` | `string` \| [`Instance`](WDX.Schema.Model.Instance.Instance.md) \| [`InstanceOrigin`](WDX.Schema.Model.Instance.InstanceOrigin.md) |
| `origin?` | [`Instance`](WDX.Schema.Model.Instance.Instance.md) \| [`InstanceOrigin`](WDX.Schema.Model.Instance.InstanceOrigin.md) |

#### Returns

[`AbstractMessage`](WDX.Schema.Message.AbstractMessage.md)

#### Defined in

WDX/Schema/Message/AbstractMessage.ts:30

## Properties

### body

• `Optional` **body**: `any`

#### Defined in

WDX/Schema/Message/AbstractMessage.ts:20

___

### error

• `Optional` **error**: [`MessageError`](WDX.Schema.Message.MessageError.md)

#### Defined in

WDX/Schema/Message/AbstractMessage.ts:22

___

### origin

• **origin**: [`Instance`](WDX.Schema.Model.Instance.Instance.md) \| [`InstanceOrigin`](WDX.Schema.Model.Instance.InstanceOrigin.md)

#### Defined in

WDX/Schema/Message/AbstractMessage.ts:28

___

### target

• **target**: `string` \| [`Instance`](WDX.Schema.Model.Instance.Instance.md) \| [`InstanceOrigin`](WDX.Schema.Model.Instance.InstanceOrigin.md)

#### Defined in

WDX/Schema/Message/AbstractMessage.ts:26

___

### timestamp

• **timestamp**: `number`

#### Defined in

WDX/Schema/Message/AbstractMessage.ts:16

___

### topic

• `Optional` **topic**: `string`

#### Defined in

WDX/Schema/Message/AbstractMessage.ts:24

___

### type

• `Abstract` **type**: [`Type`](../enums/WDX.Schema.Message.Type.md)

#### Defined in

WDX/Schema/Message/AbstractMessage.ts:14

___

### uuid

• **uuid**: `string`

#### Defined in

WDX/Schema/Message/AbstractMessage.ts:18

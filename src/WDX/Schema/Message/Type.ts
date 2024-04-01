/**
 * Elrest eDesign Runtime Library Messages
 *
 * @copyright 2024 Elrest AutomationsSysteme GMBH
 */

'use strict';

export enum Type {

  /**
   * Instance
   */
  InstanceConnectRequest = 'InstanceConnectRequest',
  InstanceConnectResponse = 'InstanceConnectResponse',

  InstanceDeleteRequest = 'InstanceDeleteRequest',
  InstanceDeleteResponse = 'InstanceDeleteResponse',
  InstanceDisconnectRequest = 'InstanceDisconnectRequest',
  InstanceDisconnectResponse = 'InstanceDisconnectResponse',

  InstanceIAm = 'InstanceIAm',

  InstanceInfoRequest = 'InstanceInfoRequest',
  InstanceInfoResponse = 'InstanceInfoResponse',

  InstanceListRequest = 'InstanceListRequest',
  InstanceListResponse = 'InstanceListResponse',

  /** Instance Monitor */
  InstanceMonitor = 'InstanceMonitor',

  InstanceMonitorSubscribeRequest = 'InstanceMonitorSubscribeRequest',
  InstanceMonitorSubscribeResponse = 'InstanceMonitorSubscribeResponse',

  InstanceMonitorUnsubscribeRequest = 'InstanceMonitorUnsubscribeRequest',
  InstanceMonitorUnsubscribeResponse = 'InstanceMonitorUnsubscribeResponse',

  /** Instance Logs */
  InstanceLog = 'InstanceLog',
  InstanceLogSubscribeRequest = 'InstanceLogSubscribeRequest',
  InstanceLogSubscribeResponse = 'InstanceLogSubscribeResponse',
  InstanceLogUnsubscribeRequest = 'InstanceLogUnsubscribeRequest',
  InstanceLogUnsubscribeResponse = 'InstanceLogUnsubscribeResponse',
  esponse = 'InstanceMonitorUnsubscribeResponse',

  /** Instance CRUD */
  InstanceRestartRequest = 'InstanceRestartRequest',
  InstanceRestartResponse = 'InstanceRestartResponse',
  InstanceStartRequest = 'InstanceStartRequest',
  InstanceStartResponse = 'InstanceStartResponse',
  InstanceStopRequest = 'InstanceStopRequest',
  InstanceStopResponse = 'InstanceStopResponse',
  InstanceSaveRequest = 'InstanceSaveRequest',
  InstanceSaveResponse = 'InstanceSaveResponse',

  InstanceSubscribeRequest = 'InstanceSubscribeRequest',
  InstanceSubscribeResponse = 'InstanceSubscribeResponse',

  InstanceUnsubscribeRequest = 'InstanceUnsubscribeRequest',
  InstanceUnsubscribeResponse = 'InstanceUnsubscribeResponse',

  InstanceWhoIsRequest = 'InstanceWhoIsRequest',
  InstanceWhoIsResponse = 'InstanceWhoIsResponse',

  /**
   * Data
   */
  DataUpdate = 'DataUpdate',

  DataRefreshSchemaRequest = 'DataRefreshSchemaRequest',
  DataRefreshSchemaResponse = 'DataRefreshSchemaResponse',

  DataRegisterProviderRequest = 'DataRegisterProviderRequest',
  DataRegisterProviderResponse = 'DataRegisterProviderResponse',

  DataProviderRequest = 'DataProviderRequest',
  DataProviderResponse = 'DataProviderResponse',

  DataRegisterRequest = 'DataRegisterRequest',
  DataRegisterResponse = 'DataRegisterResponse',

  DataUnregisterRequest = 'DataUnregisterRequest',
  DataUnregisterResponse = 'DataUnregisterResponse',

  DataRegisterSchemaChangesRequest = 'DataRegisterSchemaChangesRequest',
  DataRegisterSchemaChangesResponse = 'DataRegisterSchemaChangesResponse',

  DataUnregisterSchemaChangesRequest = 'DataUnregisterSchemaChangesRequest',
  DataUnregisterSchemaChangesResponse = 'DataUnregisterSchemaChangesResponse',

  DataSchemaChanges = 'DataSchemaChanges',

  DataSetValueRequest = 'DataSetValueRequest',
  DataSetValueResponse = 'DataSetValueResponse',

  DataGetValueRequest = 'DataGetValueRequest',
  DataGetValueResponse = 'DataGetValueResponse',

  DataSetSchemaRequest = 'DataSetSchemaRequest',
  DataSetSchemaResponse = 'DataSetSchemaResponse',

  DataGetSchemaRequest = 'DataGetSchemaRequest',
  DataGetSchemaResponse = 'DataGetSchemaResponse',

  DataDeleteSchemaRequest = 'DataDeleteSchemaRequest',
  DataDeleteSchemaResponse = 'DataDeleteSchemaResponse',

  /**
   * Package
   */
  PackageInstallRequest = 'PackageInstallRequest',
  PackageInstallResponse = 'PackageInstallResponse',
  PackageUninstallRequest = 'PackageUninstallRequest',
  PackageUninstallResponse = 'PackageUninstallResponse',

  /**
   * Repository
   */
  RepositoryListRequest = 'RepositoryListRequest',
  RepositoryListResponse = 'RepositoryListResponse',
  RepositoryInfoRequest = 'RepositoryInfoRequest',
  RepositoryInfoResponse = 'RepositoryInfoResponse',

  /**
   * Runtime
   */
  RuntimeSystemRequest = 'RuntimeSystemRequest',
  RuntimeSystemResponse = 'RuntimeSystemResponse',

  RuntimeMonitorInstance = 'RuntimeMonitorInstance',

  RuntimeMonitor = 'RuntimeMonitor',

  RuntimeInfoRequest = 'RuntimeInfoRequest',
  RuntimeInfoResponse = 'RuntimeInfoResponse',

  RuntimeMonitorSubscribeRequest = 'RuntimeMonitorSubscribeRequest',
  RuntimeMonitorSubscribeResponse = 'RuntimeMonitorSubscribeResponse',

  RuntimeMonitorUnsubscribeRequest = 'RuntimeMonitorUnsubscribeRequest',
  RuntimeMonitorUnsubscribeResponse = 'RuntimeMonitorUnsubscribeResponse',

  RuntimeStartRequest = 'RuntimeStartRequest',
  RuntimeStartResponse = 'RuntimeStartResponse',

  RuntimeStopRequest = 'RuntimeStopRequest',
  RuntimeStopResponse = 'RuntimeStopResponse',

  RuntimeRestartRequest = 'RuntimeRestartRequest',
  RuntimeRestartResponse = 'RuntimeRestartResponse',

  /**
   * Scripts
   */
  ScriptBrowseRequest = 'ScriptBrowseRequest',
  ScriptBrowseResponse = 'ScriptBrowseResponse',

  ScriptSaveRequest = 'ScriptSaveRequest',
  ScriptSaveResponse = 'ScriptSaveResponse',

  ScriptDeleteRequest = 'ScriptDeleteRequest',
  ScriptDeleteResponse = 'ScriptDeleteResponse',

  /**
   * KeepALive
   */
  KeepALive = 'KeepAlive',

  /**
   * Trending
   */
  TrendingStartRequest = 'TrendingStartRequest',
  TrendingStartResponse = 'TrendingStartResponse',
  TrendingStopRequest = 'TrendingStopRequest',
  TrendingStopResponse = 'TrendingStopResponse',
}

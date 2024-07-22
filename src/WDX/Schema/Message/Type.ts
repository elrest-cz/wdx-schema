/**
 * Elrest eDesign Runtime Library Messages
 *
 * @copyright 2024 Elrest AutomationsSysteme GMBH
 */

'use strict';

export enum Type {

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

  DataRegisterValueRequest = 'DataRegisterValueRequest',
  DataRegisterValueResponse = 'DataRegisterValueResponse',

  DataUnregisterValueRequest = 'DataUnregisterValueRequest',
  DataUnregisterValueResponse = 'DataUnregisterValueResponse',

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
   * Instance
   */

  InstanceDeleteRequest = 'InstanceDeleteRequest',
  InstanceDeleteResponse = 'InstanceDeleteResponse',

  InstanceIAm = 'InstanceIAm',

  InstanceInfoRequest = 'InstanceInfoRequest',
  InstanceInfoResponse = 'InstanceInfoResponse',

  InstanceListRequest = 'InstanceListRequest',
  InstanceListResponse = 'InstanceListResponse',

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

  InstanceWhoIsRequest = 'InstanceWhoIsRequest',
  InstanceWhoIsResponse = 'InstanceWhoIsResponse',


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
   * JS Workspace
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


  /**
   * Alarming
   */
  AlarmingListRequest = 'AlarmingListRequest',
  AlarmingListResponse = 'AlarmingListResponse',

  AlarmingSetRequest = 'AlarmingSetRequest',
  AlarmingSetResponse = 'AlarmingSetResponse',

  AlarmingDeleteRequest = 'AlarmingDeleteRequest',
  AlarmingDeleteResponse = 'AlarmingDeleteResponse',

}

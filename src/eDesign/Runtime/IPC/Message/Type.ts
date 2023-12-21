/**
 * Elrest eDesign Runtime Library Messages
 * 
 * @copyright 2023 Elrest AutomationsSysteme GMBH
 */

'use strict';

export enum Type {

	/**
	 * Instance
	 */
	InstanceConnectRequest = 'InstanceConnectRequest',
	InstanceConnectResponse = 'InstanceConnectResponse',

	InstanceDiscovery = 'InstanceDiscovery',

	InstanceDeleteRequest = 'InstanceDeleteRequest',
	InstanceDeleteResponse = 'InstanceDeleteResponse',
	InstanceDisconnectRequest = 'InstanceDisconnectRequest',
	InstanceDisconnectResponse = 'InstanceDisconnectResponse',

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

	/** Instance Monitor Log */
	InstanceMonitorLog = 'InstanceMonitorLog',

	InstanceMonitorLogSubscribeRequest = 'InstanceMonitorLogSubscribeRequest',
	InstanceMonitorLogSubscribeResponse = 'InstanceMonitorLogSubscribeResponse',

	InstanceMonitorLogUnsubscribeRequest = 'InstanceMonitorLogUnsubscribeRequest',
	InstanceMonitorLogUnsubscribeResponse = 'InstanceMonitorLogUnsubscribeResponse',

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

	/**
	 * Data
	 */
	DataUpdate = 'DataUpdate',

	DataRegisterProviderRequest = 'DataRegisterProviderRequest',
	DataRegisterProviderResponse = 'DataRegisterProviderResponse',

	DataProviderRequest = 'DataProviderRequest',
	DataProviderResponse = 'DataProviderResponse',

	DataRegisterRequest = 'DataRegisterRequest',
	DataRegisterResponse = 'DataRegisterResponse',

	DataUnregisterRequest = 'DataUnregisterRequest',
	DataUnregisterResponse = 'DataUnregisterResponse',

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


	/**
	 * Scripts
	 */
	ScriptBrowseRequest = 'ScriptBrowseRequest',
	ScriptBrowseResponse = 'ScriptBrowseResponse',

	ScriptSaveRequest = 'ScriptSaveRequest',
	ScriptSaveResponse = 'ScriptSaveResponse',

	ScriptDeleteRequest = 'ScriptDeleteRequest',
	ScriptDeleteResponse = 'ScriptDeleteResponse',

}
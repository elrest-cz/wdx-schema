/**
 * Elrest eDesign Runtime Library Messages
 * 
 * @copyright 2023 Elrest AutomationsSysteme GMBH
 * @package Message
 */

'use strict';

export enum Type {

	/**
	 * Instance
	 */
	InstanceConnectRequest = "InstanceConnectRequest",
	InstanceConnectResponse = "InstanceConnectResponse",
	InstanceDeleteRequest = "InstanceDeleteRequest",
	InstanceDeleteResponse = "InstanceDeleteResponse",
	InstanceDisconnectRequest = "InstanceDisconnectRequest",
	InstanceDisconnectResponse = "InstanceDisconnectResponse",

	InstanceInfoRequest = "InstanceInfoRequest",
	InstanceInfoResponse = "InstanceInfoResponse",

	InstanceListRequest = "InstanceListRequest",
	InstanceListResponse = "InstanceListResponse",

	InstanceMonitor = "InstanceMonitor",
	
	InstanceMonitorSubscribeRequest = "InstanceMonitorSubscribeRequest",
	InstanceMonitorSubscribeResponse = "InstanceMonitorSubscribeResponse",

	InstanceMonitorUnsubscribeRequest = "InstanceMonitorUnsubscribeRequest",
	InstanceMonitorUnsubscribeResponse = "InstanceMonitorUnsubscribeResponse",

	InstanceRestartRequest = "InstanceRestartRequest",
	InstanceRestartResponse = "InstanceRestartResponse",
	InstanceStartRequest = "InstanceStartRequest",
	InstanceStartResponse = "InstanceStartResponse",
	InstanceStopRequest = "InstanceStopRequest",
	InstanceStopResponse = "InstanceStopResponse",


	/**
	 * Data
	 */
	DataUpdate = "DataUpdate",

	DataRegisterProviderRequest = "DataRegisterProviderRequest",
	DataRegisterProviderResponse = "DataRegisterProviderResponse",

	DataProviderRequest = "DataProviderRequest",
	DataProviderResponse = "DataProviderResponse",

	DataRegisterRequest = "DataRegisterRequest",
	DataRegisterResponse = "DataRegisterResponse",

	DataUnregisterRequest = "DataUnregisterRequest",
	DataUnregisterResponse = "DataUnregisterResponse",

	DataSetValueRequest = "DataSetValueRequest",
	DataSetValueResponse = "DataSetValueResponse",

	DataGetValueRequest = "DataGetValueRequest",
	DataGetValueResponse = "DataGetValueResponse",

	DataSetSchemaRequest = "DataSetSchemaRequest",
	DataSetSchemaResponse = "DataSetSchemaResponse",

	DataGetSchemaRequest = "DataGetSchemaRequest",
	DataGetSchemaResponse = "DataGetSchemaResponse",

	/**
	 * Package
	 */
	PackageInstallRequest = "PackageInstallRequest",
	PackageInstallResponse = "PackageInstallResponse",
	PackageUninstallRequest = "PackageUninstallRequest",
	PackageUninstallResponse = "PackageUninstallResponse",

	/**
	 * Repository
	 */
	RepositoryListRequest = "RepositoryListRequest",
	RepositoryListResponse = "RepositoryListResponse",
	RepositoryInfoRequest = "RepositoryInfoRequest",
	RepositoryInfoResponse = "RepositoryInfoResponse"

}
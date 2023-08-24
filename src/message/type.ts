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
	
	
	InstanceMonitorRequest = "InstanceMonitorRequest",
	InstanceMonitorResponse = "InstanceMonitorResponse",
	
	InstanceRestartRequest = "InstanceRestartRequest",
	InstanceRestartResponse = "InstanceRestartResponse",
	InstanceStartRequest = "InstanceStartRequest",
	InstanceStartResponse = "InstanceStartResponse",
	InstanceStopRequest = "InstanceStopRequest",
	InstanceStopResponse = "InstanceStopResponse",


	/**
	 * Data
	 */

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
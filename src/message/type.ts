'use strict';

export enum Type {

	/**
	 * Connection
	 */
	ConnectionConnectRequest = "ConnectionConnectRequest",
	ConnectionConnectResponse = "ConnectionConnectResponse",
	ConnectionDisconnectRequest = "ConnectionDisconnectRequest",
	ConnectionDisconnectResponse = "ConnectionDisconnectResponse",
	ConnectionListRequest = "ConnectionListRequest",
	ConnectionListResponse = "ConnectionListResponse",
	ConnectionRestartRequest = "ConnectionRestartRequest",
	ConnectionRestartResponse = "ConnectionRestartResponse",
	ConnectionStartRequest = "ConnectionStartRequest",
	ConnectionStartResponse = "ConnectionStartResponse",
	ConnectionStopRequest = "ConnectionStopRequest",
	ConnectionStopResponse = "ConnectionStopResponse",

	/**
	 * Instance
	 */
	InstanceConnectRequest = "InstanceConnectRequest",
	InstanceConnectResponse = "InstanceConnectResponse",
	InstanceDisconnectRequest = "InstanceDisconnectRequest",
	InstanceDisconnectResponse = "InstanceDisconnectResponse",
	InstanceListRequest = "InstanceListRequest",
	InstanceListResponse = "InstanceListResponse",
	InstanceRestartRequest = "InstanceRestartRequest",
	InstanceRestartResponse = "InstanceRestartResponse",
	InstanceStartRequest = "InstanceStartRequest",
	InstanceStartResponse = "InstanceStartResponse",
	InstanceStopRequest = "InstanceStopRequest",
	InstanceStopResponse = "InstanceStopResponse",

	/**
	 * Data
	 */
	DataBrowseRequest = "DataBrowseRequest",
	DataBrowseResponse = "DataBrowseResponse",

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

	DataGetSchemaRequest = "DataSetSchemaRequest",
	DataGetSchemaResponse = "DataGetSchemaResponse",

	/**
	 * Module
	 */
	ModuleInstallRequest = "ModuleInstallRequest",
	ModuleInstallResponse = "ModuleInstallResponse",
	ModuleListRequest = "ModuleListRequest",
	ModuleListResponse = "ModuleListResponse",
	ModuleUninstallRequest = "ModuleUninstallRequest",
	ModuleUninstallResponse = "ModuleUninstallResponse"
}
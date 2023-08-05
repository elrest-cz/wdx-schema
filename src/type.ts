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
	 * Data
	 */
	DataBrowseRequest = "DataBrowseRequest",
	DataBrowseResponse = "DataBrowseResponse",
	DataRegisterRequest = "DataRegisterRequest",
	DataRegisterResponse = "DataRegisterResponse",
	DataUnregisterRequest = "DataUnregisterRequest",
	DataUnregisterResponse = "DataUnregisterResponse",
	DataSetRequest = "DataSetRequest",
	DataSetResponse = "DataSetResponse",

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
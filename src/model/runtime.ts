/**
 * Elrest eDesign Runtime Library Messages Model Runtime
 * 
 * @copyright 2023 Elrest AutomationsSysteme GMBH
 */

'use strict';

import { Instance } from "./instance";
import { Device } from "./device";
import { HostLog, HostMonitor } from "./host";
import { Data } from "./data";
import { DataSchema } from "./data";
import { Package } from "./package";
import { Repository } from "./repository";
import { Directory } from "./filesystem";

/**
 * eDesign Runtime Library Messages Model Runtime Host Protocol
 * 
 * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/protocol
 */
export enum ClientProtocol {
	ws = "ws",
	wss = "wss"
}

/**
 * eDesign Runtime Library Messages Model Runtime Host Client Configuration
 * 
 * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/protocol
 */
export class ClientConfiguration {

	constructor(
		public protocol: ClientProtocol = ClientProtocol.ws,
		public host: string = "",
		public port: number = 82
	) { }
}


export class SystemCpuTimes {

	constructor(
		/**
		 * user <number> The number of milliseconds the CPU has spent in user mode.
		 */
		public user: number,

		/**
		 * nice <number> The number of milliseconds the CPU has spent in nice mode.
		 */
		public nice: number,

		/**
		 * sys <number> The number of milliseconds the CPU has spent in sys mode.
		 */
		public sys: number,

		/**
		 * idle <number> The number of milliseconds the CPU has spent in idle mode.
		 */
		public idle: number,

		/**
		 * irq <number> The number of milliseconds the CPU has spent in irq mode.
		 */
		public irq: number

	) {

	}
}

/**
 * eDesign Runtime Operation system information model
 */
export class OS {

	constructor(

		/**
		 * EOL
		 * 
		 * The operating system-specific end-of-line marker.
		 * \n on POSIX
		 * \r\n on Windows
		 */
		public EOL?: string,

		/**
		 * availableParallelism
		 * 
		 * Estimate of the default amount of parallelism a program 
		 * should use. Always value greater than zero.
		 */
		public availableParallelism?: number,

		/**
		 * arch
		 * 
		 * operating system CPU architecture for which the Node.js binary was compiled.
		 * 
		 * Possible values are 'arm', 'arm64', 'ia32', 'mips', 'mipsel', 'ppc', 'ppc64',
		 * 'riscv64', 's390', 's390x', and 'x64'.
		 */
		public arch?: string,

		/**
		 * 
		 * Contains commonly used operating system-specific constants for error codes, 
		 * process signals, and so on.
		 * 
		 * The specific constants defined are described in OS constants.
		 * 
		 * @see https://nodejs.org/api/os.html#os-constants
		 */
		public constants?: Object,

		/**
		 * devNull
		 * 
		 * The platform-specific file path of the null device.
		 * 
		 * \\.\nul on Windows
		 * /dev/null on POSIX
		 */
		public devNull?: string,

		/**
		 * endianness
		 * 
		 * string identifying the endianness of the CPU for which the Node.js binary was compiled.
		 * Possible values are 'BE' for big endian and 'LE' for little endian.
		 */
		public endianness?: string,

		/**
		 * homedir
		 * 
		 * Returns the string path of the current user's home directory.
		 * 
		 * On POSIX, it uses the $HOME environment variable if defined. Otherwise it uses the effective UID to look up the user's home directory.
		 * 
		 * On Windows, it uses the USERPROFILE environment variable if defined. Otherwise it uses the path to the profile directory of the current user.
		 */
		public homedir?: string,


		/**
		 * hostname
		 * 
		 * host name of the operating system as a string.
		 */
		public hostname?: string,

		/**
		 * machine
		 * 
		 * Machine type as a string, such as arm, arm64, aarch64, mips, mips64, 
		 * ppc64, ppc64le, s390, s390x, i386, i686, x86_64.
		 * 
		 * On POSIX systems, the machine type is determined by calling uname(3).
		 * On Windows, RtlGetVersion() is used, and if it is not available, 
		 * GetVersionExW() will be used. @see https://en.wikipedia.org/wiki/Uname#Examples for more information.

		 */
		public machine?: string,

		/**
		 * networkInterfaces
		 * 
		 * Object containing network interfaces that have been 
		 * assigned a network address.
		 * 
		 * Each key on the returned object identifies a network interface. 
		 * The associated value is an array of objects that each describe an 
		 * assigned network address.
		 * 
		 * The properties available on the assigned network address object include:
		 * address <string> The assigned IPv4 or IPv6 address
		 * netmask <string> The IPv4 or IPv6 network mask
		 * family <string> Either IPv4 or IPv6
		 * mac <string> The MAC address of the network interface
		 * internal <boolean> true if the network interface is a loopback or similar interface that is not remotely accessible; otherwise false
		 * scopeid <number> The numeric IPv6 scope ID (only specified when family is IPv6)
		 * cidr <string> The assigned IPv4 or IPv6 address with the routing prefix in CIDR notation. If the netmask is invalid, this property is set to null.
		 */
		public networkInterfaces?: Object,

		/**
		 * platform
		 * 
		 * String identifying the operating system platform for which 
		 * the Node.js binary was compiled. 
		 * 
		 * The value is set at compile time. Possible values are 
		 * 'aix', 'darwin', 'freebsd','linux', 'openbsd', 'sunos', and 'win32'.
		 * 
		 * The return value is equivalent to process.platform.
		 * 
		 * The value 'android' may also be returned if Node.js is built on 
		 * the Android operating system. Android support is experimental.
		 */
		public platform?: string,

		/**
		 * release
		 * 
		 * The operating system as a string.
		 * 
		 * On POSIX systems, the operating system release is determined by 
		 * calling uname(3). On Windows, GetVersionExW() is used.
		 * 
		 * @see https://en.wikipedia.org/wiki/Uname#Examples for more information.
		 * 
		 */
		public release?: string,

		/**
		 * tmpdir
		 * 
		 * The operating system's default directory for temporary files as a string.
		 * 
		 */
		public tmpdir?: string,

		/**
		 * type
		 * 
		 * Returns the operating system name as returned by uname(3). 
		 * For example, it returns 'Linux' on Linux, 'Darwin' on macOS, and 
		 * 'Windows_NT' on Windows.
		 * 
		 * @see https://en.wikipedia.org/wiki/Uname#Examples for additional information about the output of running uname(3) on various operating systems.
		 */
		public type?: string,

		/**
		 * uptime
		 * 
		 * @type number
		 * Returns the system uptime in number of seconds.
		 */
		public uptime?: number,

		/**
		 * userInfo
		 */
		public userInfo?: any,

		/**
		 * version
		 * 
		 * @type string
		 * 
		 * A string identifying the kernel version.
		 * 
		 * On POSIX systems, the operating system release is determined by
		 * calling uname(3). On Windows, RtlGetVersion() is used, and if 
		 * it is not available, GetVersionExW() will be used. 
		 * 
		 * @see https://en.wikipedia.org/wiki/Uname#Examples for more information.
		 */
		public version?: string
	) { }
}

/**
 * eDesign Runtime Network Address Model
 */
export class NetworkInterface {

	constructor(

		/**
		 * name
		 * 
		 * @type string
		 * 
		 * Network interface name
		 * 
		 */
		public name: string = "",


		/**
		 * adresses
		 * 
		 * @type Array<NetworkAddress>
		 * 
		 * Network interface addresses array
		 * 
		 */
		public adresses: Array<NetworkAddress> = new Array<NetworkAddress>
	) { }
}


/**
 * eDesign Runtime Network Address Model
 */
export class NetworkAddress {

	constructor() { }
}

export class SystemCpu {

	constructor(

		/**
		 * model <string>
		 */
		public model: string,

		/**
		 * speed <number> (in MHz)
		 */
		public speed: number,
		/**
		 * speed <number> (in MHz)
		 */
		public times: SystemCpuTimes,
	) { }

}

export class System {
	constructor(
		public memoryFree: number | null = null,
		public memoryTotal: number | null = null,
		public cpu: Array<SystemCpu> = [],
	) { }
}

export class Runtime {

	constructor(

		/**
		 * eDesign Runtime Title
		 */
		public title: string = "",

		/**
		 * eDesign Runtime Host Client
		 */
		public clientConfiguration: ClientConfiguration = new ClientConfiguration,

		/**
		 * eDesign Runtime Host Connections
		 */
		public connections: Instance[] = [],

		/**
		 * eDesign Runtime Host Data
		 */
		public data: Data[] = [],

		/**
		 * eDesign Runtime Host Packages
		 */
		public packages: Package[] = [],

		/**
		 * eDesign Runtime Host Monitoring
		 */
		public scripts: Directory = new Directory("", ""),

		/**
		 * eDesign Runtime Host Repositories
		 */
		public repositories: Repository[] = [],

		/**
		 * eDesign Runtime System
		 */
		public system: System = new System,

		/**
		 * eDesign Runtime Operation system information
		 */
		public os: OS | null = new OS,
	) { }

}

import type { CustomWifiPlugin, WifiBroadCastIpResponse } from '../../src';

export class CustomWifi implements CustomWifiPlugin {
    getWifiBroadcastIp(): Promise<WifiBroadCastIpResponse> {
        const ip: WifiBroadCastIpResponse = {
            value: '192.168.0.255'
        }

        return Promise.resolve(ip);
    }
}

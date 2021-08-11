import { WebPlugin } from '@capacitor/core';

import type { CustomWifiPlugin } from './definitions';
import { WifiBroadCastIpResponse } from './definitions';

export class CustomWifi extends WebPlugin implements CustomWifiPlugin {
    getWifiBroadcastIp(): Promise<WifiBroadCastIpResponse> {
        const obj: WifiBroadCastIpResponse = {
            value: '192.168.0.255'
        }

        return Promise.resolve(obj);
    }
}

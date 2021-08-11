import React, { useEffect, useState } from 'react';
import { CustomWifi } from '@dwaw18/capacitor-plugin-wifi';

const PluginTest: React.FC = () => {
    const [broadcastIp, setBroadCastIp] = useState('');

    async function setNativeCode() {
        const broadcastIp = await CustomWifi.getWifiBroadcastIp();
        console.log('broadcast ip', broadcastIp);

        setBroadCastIp(broadcastIp.value)
    }

    useEffect(() => {
        setNativeCode();
    }, [])

    return <div>
        <h1>Native plugin</h1>
        <div>Broadcast IP: {broadcastIp}</div>
    </div>
};

export default PluginTest;

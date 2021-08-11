package com.dwaw18.plugins.wifi;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import java.util.Locale;

@CapacitorPlugin(name = "CustomWifi")
public class CustomWifiPlugin extends Plugin {
    @PluginMethod
    public void getWifiBroadcastIp(PluginCall call) {
        JSObject r = new JSObject();

        r.put("value", "192.168.0.255");

        call.resolve(r);
    }
}

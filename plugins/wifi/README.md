# @capacitor/device

The Device API exposes internal information about the device, such as the model and operating system version, along with user information such as unique ids.

## Install

```bash
npm install @capacitor/device
npx cap sync
```

## Example

```typescript
import { Device } from '@capacitor/device';

const logDeviceInfo = async () => {
  const info = await Device.getInfo();

  console.log(info);
};

const logBatteryInfo = async () => {
  const info = await Device.getBatteryInfo();

  console.log(info);
};
```

## API

<docgen-index>

* [`getWifiBroadcastIp()`](#getwifibroadcastip)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### getWifiBroadcastIp()

```typescript
getWifiBroadcastIp() => Promise<WifiBroadCastIpResponse>
```

Return broadcast IP of connected Wi-Fi network.

**Returns:** <code>Promise&lt;<a href="#wifibroadcastipresponse">WifiBroadCastIpResponse</a>&gt;</code>

**Since:** 1.0.0

--------------------


### Interfaces


#### WifiBroadCastIpResponse

| Prop        | Type                |
| ----------- | ------------------- |
| **`value`** | <code>string</code> |

</docgen-api>

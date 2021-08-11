import { registerPlugin } from '@capacitor/core';

import type { CustomWifiPlugin } from './definitions';

const CustomWifi = registerPlugin<CustomWifiPlugin>('CustomWifi', {
  web: () => import('./web').then(m => new m.CustomWifi()),
});

export * from './definitions';
export { CustomWifi };

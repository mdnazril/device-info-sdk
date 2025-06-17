import { registerWebModule, NativeModule } from 'expo';

import { DeviceInfoSdkModuleEvents } from './DeviceInfoSdk.types';

class DeviceInfoSdkModule extends NativeModule<DeviceInfoSdkModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(DeviceInfoSdkModule, 'DeviceInfoSdkModule');

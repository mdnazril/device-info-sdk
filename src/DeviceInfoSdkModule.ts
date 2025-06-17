import { NativeModule, requireNativeModule } from 'expo';

import { DeviceInfoSdkModuleEvents } from './DeviceInfoSdk.types';

declare class DeviceInfoSdkModule extends NativeModule<DeviceInfoSdkModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<DeviceInfoSdkModule>('DeviceInfoSdk');

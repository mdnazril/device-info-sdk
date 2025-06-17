import { requireNativeView } from 'expo';
import * as React from 'react';

import { DeviceInfoSdkViewProps } from './DeviceInfoSdk.types';

const NativeView: React.ComponentType<DeviceInfoSdkViewProps> =
  requireNativeView('DeviceInfoSdk');

export default function DeviceInfoSdkView(props: DeviceInfoSdkViewProps) {
  return <NativeView {...props} />;
}

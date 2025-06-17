import * as React from 'react';

import { DeviceInfoSdkViewProps } from './DeviceInfoSdk.types';

export default function DeviceInfoSdkView(props: DeviceInfoSdkViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}

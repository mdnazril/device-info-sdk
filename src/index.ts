// Reexport the native module. On web, it will be resolved to DeviceInfoSdkModule.web.ts
// and on native platforms to DeviceInfoSdkModule.ts
export { default } from './DeviceInfoSdkModule';
export { default as DeviceInfoSdkView } from './DeviceInfoSdkView';
export * from  './DeviceInfoSdk.types';

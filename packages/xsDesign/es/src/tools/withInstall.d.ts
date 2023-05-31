import type { Plugin } from "vue";
declare type SFCWithInstall<T> = T & Plugin;
export declare const withInstall: <T>(comp: T) => SFCWithInstall<T>;
export {};

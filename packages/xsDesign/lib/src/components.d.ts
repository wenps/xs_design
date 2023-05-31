import * as components from "./index";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    xsHelloWorld: typeof components.HelloWorld;
  }
}
export {};


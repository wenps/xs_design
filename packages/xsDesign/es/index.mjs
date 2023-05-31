import * as o from "./src/index.mjs";
import { HelloWorld as s } from "./src/helloWorld/index.mjs";
const t = {
  install: (e) => {
    for (const r in o)
      e.use(o[r]);
  }
};
export {
  s as HelloWorld,
  t as default
};

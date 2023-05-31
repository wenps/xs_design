import { defineComponent as l, computed as n, openBlock as s, createElementBlock as p, normalizeClass as a, unref as o, toDisplayString as c } from "vue";
import "./style/index.css";
const d = l({ name: "xs-helloWorld" }), f = /* @__PURE__ */ l({
  ...d,
  props: {
    type: null
  },
  setup(t) {
    const r = t, e = n(() => r.type == "default");
    return (m, u) => (s(), p("div", {
      class: a(["xs-helloWorld", [o(e) ? "xs-helloWorld--primary" : ""]])
    }, "helloWorld " + c(o(e)), 3));
  }
});
export {
  f as default
};

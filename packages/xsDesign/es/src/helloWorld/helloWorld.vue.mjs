import { defineComponent as o, computed as r, openBlock as s, createElementBlock as n, normalizeClass as a, toDisplayString as p } from "vue";
import "./style/index.css";
const c = o({ name: "xs-helloWorld" }), _ = /* @__PURE__ */ o({
  ...c,
  props: {
    type: {}
  },
  setup(l) {
    const t = l, e = r(() => t.type == "default");
    return (d, m) => (s(), n("div", {
      class: a(["xs-helloWorld", [e.value ? "xs-helloWorld--primary" : ""]])
    }, "helloWorld " + p(e.value), 3));
  }
});
export {
  _ as default
};

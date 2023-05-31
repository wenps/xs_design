import { createApp } from "vue";
import App from "./app.vue";
import xsDesign from "@xsDesign/components";

const app = createApp(App);
app.use(xsDesign)
app.mount("#app");
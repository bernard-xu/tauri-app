import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";
import { createPinia } from "pinia";
import { piniaPlugin } from "./store/plugin";

const store = createPinia();
store.use(
  piniaPlugin({
    key: "pinia",
  })
);
createApp(App).use(store).use(router).mount("#app");

import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";
import router from "./router";
import { configure, createGtag } from "vue-gtag";

configure({
  tagId: "G-HBQTGJQJH8",
  pageTracker: {
    router,
  },
});

const app = createApp(App);
app.use(router);

app.mount("#app");

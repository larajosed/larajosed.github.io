import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";
import router from "./router";
import { configure, createGtag } from "vue-gtag";

configure({
  tagId: "G-HBQTGJQJH8",
});

const gtag = createGtag({
  tagId: "G-HBQTGJQJH8",
});

const app = createApp(App);
app.use(router);
app.use(gtag);

app.mount("#app");

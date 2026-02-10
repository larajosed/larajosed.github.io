import * as VueRouter from "vue-router";
import About from "./components/About.vue";
import Training from "./components/Training.vue";
import Projects from "./components/Projects.vue";
import Technologies from "./components/Technologies.vue";
import Experience from "./components/Experience.vue";
import HomeView from "./components/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/inicio",
    redirect: "/",
  },
  {
    path: "/experience",
    name: "experience",
    component: Experience,
  },
  {
    path: "/projects",
    name: "projects",
    component: Projects,
  },
  {
    path: "/technologies",
    name: "technologies",
    component: Technologies,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/training",
    name: "training",
    component: Training,
  },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

export default router;

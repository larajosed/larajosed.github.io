import * as VueRouter from 'vue-router'
import About from './components/About.vue';
import Training from './components/Training.vue';
import Projects from './components/Projects.vue';
import Technologies from './components/Technologies.vue';
import Experience from './components/Experience.vue';

const routes =[
  {
    path: "/",
    name: "home",
    component: About
  },
  {
    path: "/about",
    name: "about",
    component: About
  },
  {
    path: "/training",
    name: "training",
    component: Training
  },
  {
    path: "/projects",
    name: "projects",
    component: Projects
  },
  {
    path: "/technologies",
    name: "technologies",
    component: Technologies
  },
  {
    path: "/experience",
    name: "experience",
    component: Experience
  }
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
});

export default router;


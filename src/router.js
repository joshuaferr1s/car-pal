import { createRouter, createWebHistory } from "vue-router";

const Home = () => import("./views/Home.vue");
const NotFound = () => import("./views/NotFound.vue");

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
  ],
});

export default router;

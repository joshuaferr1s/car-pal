import { createRouter, createWebHistory } from "vue-router";
import { state } from "./store";

const Home = () => import("./views/Home.vue");
const Dashboard = () => import("./views/Dashboard.vue");
const NotFound = () => import("./views/NotFound.vue");

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/dashboard", name: "Dashboard", component: Dashboard, meta: { requiresAuth: true } },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
  ],
});

router.beforeEach((to, _) => {
  if (!state.user && !state.authenticating && to.meta.requiresAuth) return "/";
});

export default router;

import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "login",
    component: () => import( "../views/acount/login.vue")
  },
  {
    path: "/registered",
    name: "registered",
    component: () => import("../views/acount/registered.vue")
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;

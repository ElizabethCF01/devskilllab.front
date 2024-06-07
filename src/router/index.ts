import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/challenges",
      name: "challenges",
      component: () => import("../views/CoursesView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LogInView.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/LogInView.vue"),
    },
    {
      path: "/code",
      name: "codebox",
      component: () => import("../views/CodeBox.vue"),
    },
    {
      path: "/codeplayground",
      name: "codeplayground",
      component: () => import("../views/CodePlayground.vue"),
    },
  ],
});

export default router;

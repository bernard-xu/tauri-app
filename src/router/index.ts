import Home from "../components/Home.vue";
import Login from "../components/Login.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import { userStore } from "../store/user";

const routes = [
  { path: "/", redirect: { name: "home" } },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  { path: "/login", name: "login", component: Login },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to) => {
  if (
    // 检查用户是否已登录
    !isAuthenticated() &&
    // ❗️ 避免无限重定向
    to.name !== "login"
  ) {
    // 将用户重定向到登录页面
    return { name: "login" };
  }
});

const isAuthenticated = (): boolean => {
  if (userStore().getToken !== "") {
    return true;
  }
  return false;
};

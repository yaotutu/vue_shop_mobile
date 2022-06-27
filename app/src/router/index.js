import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/list",
    name: "list",
    component: () => import("../views/ListView.vue"),
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("../views/CartView.vue"),
  },
  {
    path: "/my",
    name: "my",
    component: () => import("../views/MyView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;

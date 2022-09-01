import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "products",
    component: () => import("../views/ProductsView.vue"),
  },
  {
    path: "/",
    name: "singleproduct",
    component: () => import("../views/SingleView.vue"),
  },
  {
    path: "/",
    name: "login",
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/",
    name: "register",
    component: () => import("../views/RegisterView.vue"),
  },
  {
    path: "/",
    name: "admin",
    component: () => import("../views/AdminView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

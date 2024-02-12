import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Menu from '../views/Menu.vue'
import Test from '../components/Test.vue'





const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/Home",
      name: "home",
      component: Home,
    },

    {
      path: "/Menu",
      name: "menu",
      component: Menu,
    },
    {
      path: "/Test",
      name: "test",
      component: Test,
    },
  ],
});

export default router

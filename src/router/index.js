import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Menu from "../views/Menu.vue";
import Login from "../views/Login.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";

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
      path: "/",
      name: "Login",
      component: Login,
    },
    {
      path: "/About",
      name: "about",
      component: About,
    },
    {
      path: "/Contact",
      name: "contact",
      component: Contact,
    },
  ],
});

export default router;

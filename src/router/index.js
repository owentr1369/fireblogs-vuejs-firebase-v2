import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
    meta: {
      title: "Home",
    },
  },
  {
    path: "/blogs",
    name: "Blogs",
    component: () =>
      import(/* webpackChunkName: "blogs" */ "../views/Blogs.vue"),
    meta: {
      title: "Blogs",
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "auth" */ "../views/Login.vue"),
    meta: {
      title: "Login",
    },
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "auth" */ "../views/Register.vue"),
    meta: {
      title: "Register",
    },
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: () =>
      import(/* webpackChunkName: "auth" */ "../views/ForgotPassword.vue"),
    meta: {
      title: "Forgot Password",
    },
  },
  {
    path: "/create-blog",
    name: "Create Blog",
    component: () =>
      import(/* webpackChunkName: "blogs" */ "../views/CreateBlog.vue"),
    meta: {
      title: "Create Blog",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | FireBlog`;
  next();
});

export default router;

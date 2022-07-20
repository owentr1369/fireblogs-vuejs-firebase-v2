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
    path: "/profile",
    name: "Profile",
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/Profile.vue"),
    meta: {
      title: "Profile",
    },
  },
  {
    path: "/admin",
    name: "Admin",
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/Admin.vue"),
    meta: {
      title: "Admin",
    },
  },
  {
    path: "/create-post",
    name: "CreatePost",
    component: () =>
      import(/* webpackChunkName: "blogs" */ "../views/CreatePost.vue"),
    meta: {
      title: "Create Post",
    },
  },
  {
    path: "/post-preview",
    name: "BlogPreview",
    component: () =>
      import(/* webpackChunkName: "blogs" */ "../views/BlogPreview.vue"),
    meta: {
      title: "Preview Blog Post",
    },
  },
  {
    path: "/view-blog/:blogid",
    name: "ViewBlog",
    component: () =>
      import(/* webpackChunkName: "blogs" */ "../views/ViewBlog.vue"),
    meta: {
      title: "View Blog",
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

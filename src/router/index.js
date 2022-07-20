import Vue from "vue";
import VueRouter from "vue-router";
import firebase from "firebase/app";
import "firebase/auth";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
    meta: {
      title: "Home",
      requiresAuth: false,
    },
  },
  {
    path: "/blogs",
    name: "Blogs",
    component: () =>
      import(/* webpackChunkName: "blogs" */ "../views/Blogs.vue"),
    meta: {
      title: "Blogs",
      requiresAuth: false,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "auth" */ "../views/Login.vue"),
    meta: {
      title: "Login",
      requiresAuth: false,
    },
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "auth" */ "../views/Register.vue"),
    meta: {
      title: "Register",
      requiresAuth: false,
    },
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: () =>
      import(/* webpackChunkName: "auth" */ "../views/ForgotPassword.vue"),
    meta: {
      title: "Forgot Password",
      requiresAuth: false,
    },
  },
  {
    path: "/profile",
    name: "Profile",
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/Profile.vue"),
    meta: {
      title: "Profile",
      requiresAuth: true,
    },
  },
  {
    path: "/admin",
    name: "Admin",
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/Admin.vue"),
    meta: {
      title: "Admin",
      requiresAdmin: true,
      requiresAuth: true,
    },
  },
  {
    path: "/create-post",
    name: "CreatePost",
    component: () =>
      import(/* webpackChunkName: "blogs" */ "../views/CreatePost.vue"),
    meta: {
      title: "Create Post",
      requiresAdmin: true,
      requiresAuth: true,
    },
  },
  {
    path: "/post-preview",
    name: "BlogPreview",
    component: () =>
      import(/* webpackChunkName: "blogs" */ "../views/BlogPreview.vue"),
    meta: {
      title: "Preview Blog Post",
      requiresAdmin: true,
      requiresAuth: true,
    },
  },
  {
    path: "/view-blog/:blogid",
    name: "ViewBlog",
    component: () =>
      import(/* webpackChunkName: "blogs" */ "../views/ViewBlog.vue"),
    meta: {
      title: "View Blog",
      requiresAuth: false,
    },
  },
  {
    path: "/edit-blog/:blogid",
    name: "EditBlog",
    component: () =>
      import(/* webpackChunkName: "blogs" */ "../views/EditBlog.vue"),
    meta: {
      title: "Edit Blog Post",
      requiresAdmin: true,
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

router.beforeEach(async (to, from, next) => {
  let user = firebase.auth().currentUser;
  let admin = null;
  if (user) {
    let token = await user.getIdTokenResult();
    admin = token.claims.admin;
  }
  if (to.matched.some((res) => res.meta.requiresAuth)) {
    if (user) {
      if (to.matched.some((res) => res.meta.requiresAdmin)) {
        if (admin) {
          return next();
        } else {
          return next({ name: "Home" });
        }
      }
      return next();
    }
    return next({ name: "Home" });
  }
  return next();
});

export default router;

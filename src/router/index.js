import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routeOptions = [
  { path: "/", name: "Form0" },
  { path: "/form1", name: "Form1" },
  { path: "/form2", name: "Form2" },
  { path: "/summary", name: "Summary" }
];

// dynamically add routes which will be lazy loaded when needed
// code split into chuncks by webpack.

const routes = routeOptions.map(route => {
  return {
    ...route,
    component: () =>
      import(/* webpackChunkName: "[request]" */ `../views/${route.name}.vue`)
  };
});

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

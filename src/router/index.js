import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: Login,
  },
  {
    path: "/Dashboard",
    name: "dashboard",
    beforeEnter : guardMyroute,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/Dashboard.vue"),
  },
  {
    path: "/dish",
    name: "dish",
    beforeEnter : guardMyroute,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/Dish.vue"),
  },
  {
    path: "/receivers",
    name: "receivers",
    beforeEnter : guardMyroute,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/Receivers.vue"),
  },
  {
    path: "/lnb",
    name: "lnb",
    beforeEnter : guardMyroute,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/Lnb.vue"),
  },
  {
    path: "/acessories",
    name: "acessories",
    beforeEnter : guardMyroute,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/Accessories.vue"),
  },
  {
    path: "/reports",
    name: "reports",
    beforeEnter : guardMyroute,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/Reports.vue"),
  },
];

function guardMyroute(to, from, next)
{
 var isAuthenticated= false;
//this is just an example. You will have to find a better or 
// centralised way to handle you localstorage data handling 
if(localStorage.getItem('token'))
  isAuthenticated = true;
 else
  isAuthenticated= false;
 if(isAuthenticated) 
 {
  next(); // allow to enter route
 } 
 else
 {
  next('/'); // go to '/login';
 }
}

const router = new VueRouter({
  routes,
});

export default router;

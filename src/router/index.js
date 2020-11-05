import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        redirect:"/Home"
          
    },
    {
        path: "/Home",
        name: "Home",
        component: Home,
        meta: {
            keepAlive: true
        }
      
    },
    {
        path: "/Search",
        name: "Search",
        component: ()=>import("@/views/Search.vue"),
        meta: {
            title: '',
            keepAlive: false,
        }
    },
]

const router = new VueRouter({
    routes
});

export default router;
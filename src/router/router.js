import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({

    routes: [
        {
            path:"/",
            component: () => import("../views/home/Home")
        },
        {
            path:"/catagory",
            component: () => import("../views/catagory/Catagory")
        },
        {
            path:"/cart",
            component: () => import("../views/cart/Cart")
        },
        {
            path:"/my",
            component: () => import("../views/my/My")
        },
        {
            path:"/detail/:iid",
            name: "detail",
            component: () => import("../views/detail/GoodDetail")
        }
    ],
    linkExactActiveClass:"active",
});
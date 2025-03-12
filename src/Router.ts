import { createRouter, createWebHistory } from "vue-router";

const paths = {
    homeView: "/",
    categoryView: "/category"
}

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: paths.homeView,
            component: import("@/views/HomeView.vue")
        },
        {
            path: paths.categoryView,
            component: import("@/views/CategoryView.vue")
        },
        // {
        //     path: "*",
        //     component: import("@/views/HomeView.vue")
        // }
    ]
})

export default {router, paths};
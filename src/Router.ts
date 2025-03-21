import { createRouter, createWebHistory } from "vue-router";
import type { IItem } from "./Interface/IItem";
import { useUserStores } from "./stores/userStore";

export const addRouteForItem = (item: IItem) => {
    item.router = { name: `ProductView`, params: { name: `${item.name}`, id: `${item.id}` } };
}

export const addRouteForItems = (items: Array<IItem>) => {
    for (let i = 0; i < items.length; i++) {
        addRouteForItem(items[i]);
    }
}

export const paths = {
    homeView: "/",
    categoryView: "/category",
    productView: "/products/:name-:id",
    shoppingCartView: "/cart"
}

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: paths.homeView,
            component: () => import("@/views/HomeView.vue")
        },
        {
            path: paths.categoryView,
            component: () => import("@/views/CategoryView.vue")
        },
        {
            path: paths.productView,
            name: "ProductView",
            component: () => import("@/views/ProductView.vue")
        },
        {
            path: paths.shoppingCartView,
            name: "shoppingCartView",
            component: () => import("@/views/ShoppingCartView.vue"),
            meta: {
                requiresAuth: true
            }
        },
        // {
        //     path: "*",
        //     component: import("@/views/HomeView.vue")
        // }
    ],
    scrollBehavior(to, from, savedPosition) {
        return {
            top: 0,
            behavior: "instant"
        }
    }
});

router.beforeEach(async(to, from, next) =>{
    const userStore = useUserStores();

    if(to.meta.requiresAuth && !userStore.user){
        
    }else{
        next();
    }
})
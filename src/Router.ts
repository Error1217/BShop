import { createRouter, createWebHistory } from "vue-router";
import type { IItem } from "./Interface/IItem";
import { useUserStore } from "./stores/useUserStore";
import { ref } from "vue";

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
    shoppingCartView: "/cart",
    userView: "/users/:id",
}

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: paths.homeView,
            components: {
                default: () => import("@/views/HomeView.vue")
            }
        },
        {
            path: paths.categoryView,
            components: {
                default: () => import("@/views/CategoryView.vue")
            }
        },
        {
            path: paths.productView,
            name: "ProductView",
            components: {
                default: () => import("@/views/ProductView.vue")
            }
        },
        {
            path: paths.shoppingCartView,
            name: "shoppingCartView",
            components: {
                default: () => import("@/views/ShoppingCartView.vue"),
            },
            meta: {
                requiresAuth: true
            }
        },
        {
            path: paths.userView,
            name: "UserView",
            components: {
                default: () => import("@/views/UserView.vue"),
            },
            redirect: (to) => {
                return `/users/${to.params.id}`
            },
            children: [
                {
                    path: "",
                    name: "UserProfile",
                    component: () => import("@/components/UserProfile.vue"),
                },
                {
                    path: "profile",
                    name: "UserProfileBtn",
                    component: () => import("@/components/UserProfile.vue"),
                },
                {
                    path: "favorite",
                    name: "UserFavoriteListBtn",
                    component: () => import("@/components/UserFavoriteList.vue"),
                }
            ],
            meta: {
                requiresAuth: true
            },
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

router.beforeEach(async (to, from) => {
    const userStore = useUserStore();
    if (to.meta.requiresAuth && !userStore.user) {
        return {path: "/"}
    } else {

    }
});


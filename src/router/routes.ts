import { type RouteLocationGeneric } from "vue-router";

export const paths = {
    homeView: "/",
    categoryView: "/category",
    productView: "/products/:name-:id",
    shoppingCartView: "/cart",
    userView: "/users/:id",
    backendView: "/backend"
}

export const routes = [
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
        redirect: (to: RouteLocationGeneric) => {
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
    {
        path: paths.backendView,
        name: "BackendView",
        components: {
            default: () => import("@/views/BackendView.vue"),
        },
        redirect: (to: RouteLocationGeneric) => {
            return `/backend/home`
        },
        children: [
            {
                path: "home",
                name: "BackendHomeBtn",
                component: () => import("@/components/BackendHome.vue"),
            },
            {
                path: "product",
                name: "BackendProductBtn",
                component: () => import("@/components/BackendProduct.vue"),
            }
        ],
        meta: {
            requiresAuth: true,
            roles: ["admin"]
        }
    },

    // {
    //     path: "*",
    //     component: import("@/views/HomeView.vue")
    // }
]
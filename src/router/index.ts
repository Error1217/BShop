import { createRouter, createWebHistory } from "vue-router";
import type { IItem } from "../Interface/IItem";
import { routes, paths } from "./routes";
import setupGuards from "./guard";

export const addRouteForItem = (item: IItem) => {
    item.router = { name: `ProductView`, params: { name: `${item.name}`, id: `${item.id}` } };
}

export const addRouteForItems = (items: Array<IItem>) => {
    for (let i = 0; i < items.length; i++) {
        addRouteForItem(items[i]);
    }
}

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    scrollBehavior(to, from, savedPosition) {
        return {
            top: 0,
            behavior: "instant"
        }
    }
});


setupGuards(router);


export { paths };
export default router;
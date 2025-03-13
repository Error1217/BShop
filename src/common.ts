import type { IRouter } from "./Interface/IRouter";
import router from '@/Router';
import {type RouteLocationRaw } from "vue-router";

export const handleClick = (routerObj: IRouter) => {
    router.router.push(routerObj as RouteLocationRaw);
}
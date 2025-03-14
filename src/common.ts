import type { IRouter } from "./Interface/IRouter";
import {router} from '@/router';
import {type RouteLocationRaw } from "vue-router";

export const handleClick = (routerObj: IRouter) => {
    router.push(routerObj as RouteLocationRaw);
}
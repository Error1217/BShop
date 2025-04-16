import type { RouteLocationRaw } from "vue-router";
import type { IRouter } from "@/Interface/IRouter";
import router from "@/router/index";


export const handleClickRouter = (routerObj: IRouter) => {
    router.push(routerObj as RouteLocationRaw);
};


import type { RouteLocationRaw } from "vue-router";
import type { IRouter } from "@/Interface/IRouter";
import { router } from "@/Router";
import { useWindowStore } from "./stores/useWindowStore";


export const handleClickRouter = (routerObj: IRouter) => {
    router.push(routerObj as RouteLocationRaw);
};

// export const handleClickClose = (isVisible:boolean) => {
//     isVisible = false;
//     console.log(isVisible);
// }


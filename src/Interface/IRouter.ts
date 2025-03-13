import type { LocationQueryRaw, RouteParamsRaw, RouteLocationAsPathGeneric } from "vue-router"


export interface IRouter{
    path?:string;
    name?: string;
    query?: {[key: string]:string | string[]};
    params?: RouteParamsRaw
}
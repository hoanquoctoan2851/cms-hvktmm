import { App } from "vue";
import { RouteRecordRaw, RouterOptions } from "vue-router";
export default class Router {
    private _vueRouter;
    private routes;
    constructor(options: RouterOptions);
    install(app: App): void;
    addRoute(route: RouteRecordRaw): void;
    removeRoute(name: string): void;
    hasRoute(name: string): boolean;
    getRoutes(): RouteRecordRaw[];
}

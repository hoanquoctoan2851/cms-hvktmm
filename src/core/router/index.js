import { reactive } from "vue";
import { createRouter, } from "vue-router";
export default class Router {
    _vueRouter;
    routes;
    constructor(options) {
        this._vueRouter = createRouter(options);
        this.routes = reactive([...options.routes]);
    }
    install(app) {
        this._vueRouter.install(app);
    }
    addRoute(route) {
        this.routes.push(route);
        this._vueRouter.addRoute(route);
    }
    removeRoute(name) {
        const routeIndex = this.routes.findIndex((route) => route.name === name || route.path === name);
        if (routeIndex > -1) {
            this.routes.splice(routeIndex, 1);
            this._vueRouter.removeRoute(name);
        }
    }
    hasRoute(name) {
        return this._vueRouter.hasRoute(name);
    }
    getRoutes() {
        return this.routes;
    }
}

import UserRoutePaths from "@/modules/user/router/paths";
import AppRoutePaths from "@/router/paths";
import "vue-router";
const routes = [
    {
        path: AppRoutePaths.Index,
        redirect: UserRoutePaths.Index,
        meta: {
            showInMenu: false,
        },
    },
    {
        path: "/:pathMatch(.*)*",
        name: "not-found",
        component: () => import("@/views/NotFound.vue"),
        meta: {
            showInMenu: false,
        },
    },
];
export default routes;

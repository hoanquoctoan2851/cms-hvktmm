import { createRoutePath } from "@/core/utilities";
export const AppRouteGruads = {
    Index: {
        path: "auth",
        name: "AUTH",
    },
    Login: {
        path: "login",
        name: "LOGIN",
    },
    ForgotPassword: {
        path: "forgot-password",
        name: "FORGOT_PASSWORD",
    },
};
const AuthRoutePaths = createRoutePath({
    Index: AppRouteGruads.Index.path,
    Login: AppRouteGruads.Login.path,
    ForgotPassword: AppRouteGruads.ForgotPassword.path,
});
export default AuthRoutePaths;

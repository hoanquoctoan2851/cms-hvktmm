declare type GuardKey = "Index" | "Login" | "ForgotPassword";
export declare const AppRouteGruads: Record<GuardKey, AppRouteGuard>;
declare const AuthRoutePaths: {
    readonly Index: `/${string}`;
    readonly Login: `/${string}/${string}`;
    readonly ForgotPassword: `/${string}/${string}`;
};
export default AuthRoutePaths;

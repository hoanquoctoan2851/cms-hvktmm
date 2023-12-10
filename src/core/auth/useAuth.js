import { inject } from "vue";
import "./../../models/Auth";
export const authInjectKey = Symbol("auth");
export default function useAuth() {
    return inject(authInjectKey, {
        account: undefined,
        isLoggedIn: false,
        token: undefined,
        login: () => { },
        logout: () => { },
    });
}

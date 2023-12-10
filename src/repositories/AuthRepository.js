import env from "@/core/env";
import { Repository } from "@/core/Repository";
import "@/models/Auth";
class AuthRepository extends Repository {
    constructor() {
        super(env.API_URL);
    }
    login(payload) {
        return this.request({
            url: "/login",
            method: "post",
            showLoading: true,
            data: payload,
        });
    }
    refreshToken(refreshToken) {
        return this.api.post("/refreshToken", {
            refreshToken,
        });
    }
    logout() {
        return this.request({
            url: "/logout",
            method: "delete",
            showLoading: true,
        });
    }
}
export default new AuthRepository();

import env from "@/core/env";
import { Repository } from "@/core/Repository";
import "@/models/User";
import "./../models/User";
class UserRepository extends Repository {
    constructor() {
        super(env.API_URL);
    }
    addUser(payload) {
        return this.request({
            url: "/users",
            method: "post",
            data: payload,
        });
    }
    addListUser(data) {
        return this.request({
            url: "/create-list-user",
            method: "POST",
            data,
        });
    }
    getInfo(msv) {
        return this.request({
            url: `/user/${msv}`,
            method: "get",
            showLoading: true,
        });
    }
    updateInfo(msv, data) {
        return this.request({
            url: `/users/${msv}`,
            method: "put",
            showLoading: true,
            data: data,
        });
    }
    depositUser(msv, data) {
        return this.request({
            url: `/users/balance/${msv}`,
            method: "put",
            showLoading: true,
            data: data,
        });
    }
    deleteUser(msv) {
        return this.request({
            url: `/users/${msv}`,
            method: "DELETE",
        });
    }
    changePassword(data) {
        return this.request({
            url: `/users/changePassword`,
            method: "put",
            showLoading: true,
            data: data,
        });
    }
    getListUser(params) {
        return this.request({
            url: `/users`,
            method: "get",
            params: params,
        });
    }
    getAllLetter(msv) {
        return this.request({
            url: `/users/${msv}/allLetter`,
            method: "get",
        });
    }
}
export default new UserRepository();

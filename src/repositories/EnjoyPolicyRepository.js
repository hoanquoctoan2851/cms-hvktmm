import env from "@/core/env";
import { Repository } from "@/core/Repository";
import "@/models/EnjoyPolicy";
import "@/models/Otp";
class EnjoyPolicyRepository extends Repository {
    constructor() {
        super(env.API_URL);
    }
    create(payload) {
        return this.request({
            url: `/enjoyPolicy`,
            method: "post",
            data: payload,
        });
    }
    updateLetter(id, data) {
        return this.request({
            method: "PUT",
            url: `/enjoyPolicy/${id}`,
            data: data,
        });
    }
    deleteLetter(id) {
        return this.request({
            method: "Delete",
            url: `/enjoyPolicy/${id}`,
        });
    }
    getCodeLetter(id, data) {
        return this.request({
            method: "POST",
            url: `/enjoyPolicy/getCode/${id}`,
            data: data,
        });
    }
    verifyCodeRequest(id, data) {
        return this.request({
            method: "POST",
            url: `/enjoyPolicy/verifyCodeLetter/${id}`,
            data: data,
        });
    }
}
export default new EnjoyPolicyRepository();

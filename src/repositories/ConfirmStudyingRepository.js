import env from "@/core/env";
import { Repository } from "@/core/Repository";
import "@/models/ConfirmStudying";
import "@/models/Otp";
class ConfirmStudyingRepository extends Repository {
    constructor() {
        super(env.API_URL);
    }
    create(payload) {
        return this.request({
            url: `/confirmStudying`,
            method: "post",
            data: payload,
        });
    }
    updateLetter(id, data) {
        return this.request({
            method: "PUT",
            url: `/confirmStudying/${id}`,
            data: data,
        });
    }
    deleteLetter(id) {
        return this.request({
            method: "Delete",
            url: `/confirmStudying/${id}`,
        });
    }
    getCodeLetter(id, data) {
        return this.request({
            method: "POST",
            url: `/confirmStudying/getCode/${id}`,
            data: data,
        });
    }
    verifyCodeRequest(id, data) {
        return this.request({
            method: "POST",
            url: `/confirmStudying/verifyCodeLetter/${id}`,
            data: data,
        });
    }
}
export default new ConfirmStudyingRepository();

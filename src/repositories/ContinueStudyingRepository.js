import env from "@/core/env";
import { Repository } from "@/core/Repository";
import "@/models/Otp";
import "./../models/ContinueStudying";
class ConfirmStudyingRepository extends Repository {
    constructor() {
        super(env.API_URL);
    }
    create(payload) {
        return this.request({
            url: `/continueStudying`,
            method: "post",
            data: payload,
        });
    }
    updateLetter(id, data) {
        return this.request({
            method: "PUT",
            url: `/continueStudying/${id}`,
            data: data,
        });
    }
    deleteLetter(id) {
        return this.request({
            method: "Delete",
            url: `/continueStudying/${id}`,
        });
    }
    getCodeLetter(id, data) {
        return this.request({
            method: "POST",
            url: `/continueStudying/getCode/${id}`,
            data: data,
        });
    }
    verifyCodeRequest(id, data) {
        return this.request({
            method: "POST",
            url: `/continueStudying/verifyCodeLetter/${id}`,
            data: data,
        });
    }
}
export default new ConfirmStudyingRepository();

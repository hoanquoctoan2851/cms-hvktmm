import env from "@/core/env";
import { Repository } from "@/core/Repository";
import "@/models/Otp";
import "@/models/RenewStudentCard";
class RenewStudentCardRepository extends Repository {
    constructor() {
        super(env.API_URL);
    }
    create(payload) {
        return this.request({
            url: `/renewStudentCard`,
            method: "post",
            data: payload,
        });
    }
    updateLetter(id, data) {
        return this.request({
            method: "PUT",
            url: `/renewStudentCard/${id}`,
            data: data,
        });
    }
    deleteLetter(id) {
        return this.request({
            method: "Delete",
            url: `/renewStudentCard/${id}`,
        });
    }
    getCodeLetter(id, data) {
        return this.request({
            method: "POST",
            url: `/renewStudentCard/getCode/${id}`,
            data: data,
        });
    }
    verifyCodeRequest(id, data) {
        return this.request({
            method: "POST",
            url: `/renewStudentCard/verifyCodeLetter/${id}`,
            data: data,
        });
    }
}
export default new RenewStudentCardRepository();

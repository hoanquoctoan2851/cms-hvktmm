import env from "@/core/env";
import { Repository } from "@/core/Repository";
import "@/models/Otp";
import "../models/LeavingSchool";
class LeavingSchoolRepository extends Repository {
    constructor() {
        super(env.API_URL);
    }
    create(payload) {
        return this.request({
            url: `/leavingSchool`,
            method: "post",
            data: payload,
        });
    }
    updateLetter(id, data) {
        return this.request({
            method: "PUT",
            url: `/leavingSchool/${id}`,
            data: data,
        });
    }
    deleteLetter(id) {
        return this.request({
            method: "Delete",
            url: `/leavingSchool/${id}`,
        });
    }
    getCodeLetter(id, data) {
        return this.request({
            method: "POST",
            url: `/leavingSchool/getCode/${id}`,
            data: data,
        });
    }
    verifyCodeRequest(id, data) {
        return this.request({
            method: "POST",
            url: `/leavingSchool/verifyCodeLetter/${id}`,
            data: data,
        });
    }
}
export default new LeavingSchoolRepository();

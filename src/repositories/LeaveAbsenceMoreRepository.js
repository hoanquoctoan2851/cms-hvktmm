import env from "@/core/env";
import { Repository } from "@/core/Repository";
import "@/models/LeaveAbsenceMore";
import "@/models/Otp";
class LeaveAbsenceMoreRepository extends Repository {
    constructor() {
        super(env.API_URL);
    }
    create(payload) {
        return this.request({
            url: `/leaveAbsenceMore`,
            method: "post",
            data: payload,
        });
    }
    updateLetter(id, data) {
        return this.request({
            method: "PUT",
            url: `/leaveAbsenceMore/${id}`,
            data: data,
        });
    }
    deleteLetter(id) {
        return this.request({
            method: "Delete",
            url: `/leaveAbsenceMore/${id}`,
        });
    }
    getCodeLetter(id, data) {
        return this.request({
            method: "POST",
            url: `/leaveAbsenceMore/getCode/${id}`,
            data: data,
        });
    }
    verifyCodeRequest(id, data) {
        return this.request({
            method: "POST",
            url: `/leaveAbsenceMore/verifyCodeLetter/${id}`,
            data: data,
        });
    }
}
export default new LeaveAbsenceMoreRepository();

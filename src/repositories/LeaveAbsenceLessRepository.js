import env from "@/core/env";
import { Repository } from "@/core/Repository";
import "@/models/Otp";
import "./../models/LeaveAbsenceLess";
class LeaveAbsenceLessRepository extends Repository {
    constructor() {
        super(env.API_URL);
    }
    create(payload) {
        return this.request({
            url: `/leaveAbsenceLess`,
            method: "post",
            data: payload,
        });
    }
    updateLetter(id, data) {
        return this.request({
            method: "PUT",
            url: `/leaveAbsenceLess/${id}`,
            data: data,
        });
    }
    deleteLetter(id) {
        return this.request({
            method: "Delete",
            url: `/leaveAbsenceLess/${id}`,
        });
    }
    getCodeLetter(id, data) {
        return this.request({
            method: "POST",
            url: `/leaveAbsenceLess/getCode/${id}`,
            data: data,
        });
    }
    verifyCodeRequest(id, data) {
        return this.request({
            method: "POST",
            url: `/leaveAbsenceLess/verifyCodeLetter/${id}`,
            data: data,
        });
    }
}
export default new LeaveAbsenceLessRepository();

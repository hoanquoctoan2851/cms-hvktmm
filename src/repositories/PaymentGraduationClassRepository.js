import env from "@/core/env";
import { Repository } from "@/core/Repository";
import "@/models/Otp";
import "@/models/PaymentGraduationClass";
class PaymentGraduationClassRepository extends Repository {
    constructor() {
        super(env.API_URL);
    }
    create(payload) {
        return this.request({
            url: `/paymentGraduationClass`,
            method: "post",
            data: payload,
        });
    }
    updateLetter(id, data) {
        return this.request({
            method: "PUT",
            url: `/paymentGraduationClass/${id}`,
            data: data,
        });
    }
    deleteLetter(id) {
        return this.request({
            method: "Delete",
            url: `/paymentGraduationClass/${id}`,
        });
    }
    getCodeLetter(id, data) {
        return this.request({
            method: "POST",
            url: `/paymentGraduationClass/getCode/${id}`,
            data: data,
        });
    }
    verifyCodeRequest(id, data) {
        return this.request({
            method: "POST",
            url: `/paymentGraduationClass/verifyCodeLetter/${id}`,
            data: data,
        });
    }
}
export default new PaymentGraduationClassRepository();
